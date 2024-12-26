import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { Abi, zeroAddress } from "viem";
import { ethers } from "ethers";

import { ABI } from "@/abis/ABI";
import { ApproveABI } from "@/abis/ApproveABI";

import Button from "@/design-systems/Atoms/Button";
import { AddressString } from "@/interfaces";
import { DepositProps } from "./interface";
import { useToken } from "@/hooks/useToken";

import { CUSTOM_CHAIN_CONFIG } from "@/utils";
import {
  DebtTokenContractAdd,
  StabilityPoolContractAdd,
} from "@/utils/Contract";
import { useModal } from "@/hooks/useModal";
import { useWaitForTransaction } from "@/hooks/useWaitForTransaction";
import { WriteContractErrorType } from "wagmi/actions";

export const TabsEarn = ({ data, activeTab }: DepositProps) => {
  const { address, chainId, isConnected } = useAccount();
  const [amount, setAmount] = useState<string>("");
  const [isLoadingWithdraw, setIsLoadingWithdraw] = useState<boolean>(false);
  const modal = useModal();

  const LUSDToken = useToken({
    abi: ApproveABI as Abi,
    address: address as AddressString,
    tokenAddress: DebtTokenContractAdd,
  });

  useEffect(() => {
    setAmount("");
  }, [address]);

  useEffect(() => {
    setAmount("");
  }, [activeTab]);

  const { waitForTransaction, isLoading: isWaitingForTransaction } =
    useWaitForTransaction();
  const { writeContractAsync: approve, isPending: isPendingApprove } =
    useWriteContract();
  const { writeContractAsync: deposit, isPending: isPendingDeposit } =
    useWriteContract();
  // const { writeContractAsync: withdraw, isPending: isPendingWithdraw } =
  //   useWriteContract();

  const isLoading =
    isPendingApprove ||
    isPendingDeposit ||
    isLoadingWithdraw ||
    // isPendingWithdraw ||
    isWaitingForTransaction;

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^\d*\.?\d*$/;
    if (regex.test(e.target.value)) {
      setAmount(e.target.value);
    }
  };

  const handleApproval = useCallback(
    async (spenderAdd: AddressString) => {
      try {
        const hash = await approve({
          abi: ApproveABI,
          address: DebtTokenContractAdd,
          functionName: "approve",
          args: [spenderAdd, ethers.utils.parseUnits(amount.toString(), 18)],
        });

        await waitForTransaction(hash);
      } catch (e) {
        console.log(e);
        modal.setOpen({
          modalType: "TransactionConfirmation",
          type: "error",
          open: true,
          data: <>Something went wrong during approval</>,
        });
        throw new Error("Something went wrong during approval");
      }
    },
    [amount, approve, modal, waitForTransaction]
  );

  const handleDeposit = useCallback(async () => {
    try {
      const tx = await deposit({
        abi: ABI,
        address: StabilityPoolContractAdd,
        functionName: "provideToSP",
        args: [ethers.utils.parseUnits(amount.toString(), 18).toBigInt(), zeroAddress],
      });

      await waitForTransaction(tx);

      LUSDToken.refetch();
      modal.setOpen({
        modalType: "TransactionConfirmation",
        type: "success",
        open: true,
        data: <>Successfully Deposit {amount} LUSD</>,
      });
    } catch (error) {
      console.log(error);
      modal.setOpen({
        modalType: "TransactionConfirmation",
        type: "error",
        open: true,
        data: <>Something went wrong during deposit</>,
      });
      throw new Error("Something went wrong during deposit");
    }
  }, [deposit, amount, waitForTransaction, LUSDToken, modal]);

  const handleWithdraw = useCallback(async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const StabilityContract = new ethers.Contract(
        StabilityPoolContractAdd,
        ABI,
        signer
      );
      setIsLoadingWithdraw(true);
      const tx = await StabilityContract.withdrawFromSP(
        ethers.utils.parseUnits(amount.toString(), 18),
        { gasLimit: ethers.utils.hexlify(3401649) }
      );

      await waitForTransaction(tx?.hash);
      LUSDToken.refetch();
      modal.setOpen({
        modalType: "TransactionConfirmation",
        type: "success",
        open: true,
        data: <>Successfully withdraw {amount} LUSD</>,
      });
      setAmount("");
    } catch (error) {
      const e = error as WriteContractErrorType;
      console.log(e);
      const message = e.message.includes("User must have a non-zero deposit")
        ? "You have not any withdrawable balance."
        : "Something went wrong during withdrawal";
      modal.setOpen({
        modalType: "TransactionConfirmation",
        type: "error",
        open: true,
        data: <>{message}</>,
      });
      throw new Error(message);
    } finally {
      setIsLoadingWithdraw(false);
    }
  }, [amount, waitForTransaction, LUSDToken, modal]);

  const handleTransaction = useCallback(async () => {
    if (!isConnected) {
      return toast.error("Please connect your wallet.");
    }

    if (!Number(amount)) {
      return toast.warn("Please enter an amount");
    }

    if (activeTab === 0 && +amount > Number(LUSDToken?.balance)) {
      return toast.warn("Insufficient Balance");
    }

    if (chainId !== CUSTOM_CHAIN_CONFIG.sepolia.chainId) {
      return toast.warn("Please switch to sepolia Network");
    }

    const promise = new Promise(async (resolve, reject) => {
      try {
        if (activeTab === 0) {
          await handleApproval(address as AddressString);
        }

        const action = activeTab === 0 ? handleDeposit : handleWithdraw;
        await action();
        resolve(true);
        setAmount("");
      } catch (error) {
        reject(error);
      }
    });

    toast.promise(promise, {
      pending: "Transaction in progress...",
    });
  }, [
    isConnected,
    amount,
    LUSDToken?.balance,
    chainId,
    activeTab,
    handleDeposit,
    handleWithdraw,
    handleApproval,
    address,
  ]);

  return (
    <div>
      <div className="flex justify-between w-full text-[12px] sm:text-[14px] font-medium">
        <div>
          {activeTab == 0 ? "Deposit" : "Withdraw"}{" "}
          <span className="font-bold">{data?.name}</span>
        </div>
        <div className="!font-normal">
          Balance:{" "}
          <span className="font-bold">
            {Number(LUSDToken?.balance).toFixed(2) || "0"}{" "}
            {LUSDToken?.symbol}
          </span>
        </div>
      </div>

      <div className="flex justify-between border-primary border-[1px] rounded-[8px] mt-[4px] mb-[12px]">
        <div className="p-2 flex justify-between w-full">
          <input
            type="string"
            className="w-full bg-transparent focus-visible:outline-none"
            placeholder="Enter an amount"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="flex items-center bg-lightBlack p-2 text-white text-[12px] sm:text-[14px] font-bold rounded-r-[7px]">
          {LUSDToken?.symbol}
        </div>
      </div>

      <Button
        onClick={handleTransaction}
        className={`bg-primary py-[6px] px-[16px] w-full text-[14px] font-bold !text-black `}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : activeTab == 0 ? "Deposit" : "Withdraw"}
      </Button>
    </div>
  );
};
