import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { Abi, zeroAddress } from "viem";
import { ethers } from "ethers";

import { ChickenBondABI } from "@/abis/ChickenBondABI";
import { ApproveABI } from "@/abis/ApproveABI";

import Button from "@/design-systems/Atoms/Button";
import { AddressString } from "@/interfaces";
import { DepositProps } from "./interface";
import { useToken } from "@/hooks/useToken";

import { CUSTOM_CHAIN_CONFIG } from "@/utils";
import {
  DebtTokenContractAdd,
  ChickenBondContractAdd,
} from "@/utils/Contract";
import { useModal } from "@/hooks/useModal";
import { useWaitForTransaction } from "@/hooks/useWaitForTransaction";
import { WriteContractErrorType } from "wagmi/actions";

export const TabsBond = ({ data, activeTab }: DepositProps) => {
  const { address, chainId, isConnected } = useAccount();
  const [amount, setAmount] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
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
    const value = e.target.value;

    if (regex.test(value)) {
      const numericValue = parseFloat(value); // Convert string to a number

      if (value === '' || numericValue >= 100) {
        setError(null); // Clear error if valid
      } else {
        setError('Amount must be greater than 100'); // Show error
      }

      setAmount(value); // Update the input value
    }
  };

  const handleApproval = useCallback(
    async (spenderAdd: AddressString) => {
      try {
        const hash = await approve({
          abi: ApproveABI,
          address: DebtTokenContractAdd,
          functionName: "approve",
          args: [ChickenBondContractAdd, ethers.utils.parseUnits(amount.toString(), 18)],
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
        abi: ChickenBondABI,
        address: ChickenBondContractAdd,
        functionName: "createBond",
        args: [ethers.utils.parseUnits(amount.toString(), 18).toBigInt()],
      });

      await waitForTransaction(tx);

      LUSDToken.refetch();
      modal.setOpen({
        modalType: "TransactionConfirmation",
        type: "success",
        open: true,
        data: <>Successfully Created Bond {amount} LUSD</>,
      });
    } catch (error) {
      console.log(error);
      modal.setOpen({
        modalType: "TransactionConfirmation",
        type: "error",
        open: true,
        data: <>Something went wrong during create Bond</>,
      });
      throw new Error("Something went wrong during create Bond");
    }
  }, [deposit, amount, waitForTransaction, LUSDToken, modal]);

  const handleWithdraw = useCallback(async () => {
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
          {activeTab == 0 ? "Bond" : "Withdraw"}{" "}
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
          {error && <span className="text-red-500 text-sm">{error}</span>}
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
        {isLoading ? "Loading..." : activeTab == 0 ? "CreateBond" : "Withdraw"}
      </Button>
    </div>
  );
};
