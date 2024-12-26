"use client";

import { useEffect, useMemo, useState } from "react";
import Typography from "@/design-systems/Atoms/Typography";
import { VaultsFormProps } from "./interface";
import Input from "@/design-systems/Atoms/Input";
import Image from "next/image";
import UltraIcon from "@/assets/image/Icons/ultraIcon.svg";
import { VaultCardData } from "@/design-systems/Templates/HomePageTemplate/utils";
import { vaultsCardPrismaData } from "./utils";
import { useAccount,useBalance, useReadContract, useWriteContract } from "wagmi";
import { toast } from "react-toastify";
import { ethers } from "ethers";

import { TroveApproveABI } from "@/abis/TroveApprovalABI";
import { BorrowerABI } from "@/abis/BorrowerABI";
import { BorrowerContractAdd, OpenTroveContractAdd } from "@/utils/Contract";
import { TroveManager } from "@/abis/TroveManager";
import Button from "@/design-systems/Atoms/Button";
import { AddressString } from "@/interfaces";
import { useToken } from "@/hooks/useToken";
import { ApproveABI } from "@/abis/ApproveABI";
import { Abi } from "viem";
import { useModal } from "@/hooks/useModal";
import {
  readContract,
  waitForTransactionReceipt,
  writeContract,
} from "wagmi/actions";
import { config } from "@/utils/config";
import { useWaitForTransaction } from "@/hooks/useWaitForTransaction";

const SelectVaultForm: React.FC<VaultsFormProps> = ({ urlAddress }) => {
  const { address, isConnected } = useAccount();
  const [data, setData] = useState<VaultCardData | undefined>(undefined);
  const [amount, setAmount] = useState<string>("");
  const modal = useModal();
  const { waitForTransaction, isLoading: isWaitingForTransaction } =
    useWaitForTransaction();
  const { writeContractAsync: approve, isPending: isPendingApprove } =
    useWriteContract();
  const { writeContractAsync: openTrove, isPending: isPendingOpenTrove } =
    useWriteContract();

  const {
    data: trove,
    isLoading: isLoadingTroveData,
    refetch: refetchTrove,
  } = useReadContract({
    abi: TroveManager,
    address: OpenTroveContractAdd,
    functionName: "Troves",
    args: [address as AddressString],
  });

  const isLoading =
    isPendingOpenTrove ||
    isWaitingForTransaction ||
    isPendingApprove ||
    isLoadingTroveData;

  // const { balance, symbol, refetch } = useToken({
  //   address: address as AddressString,
  //   tokenAddress: urlAddress as AddressString,
  //   abi: ApproveABI as Abi,
  // });

  const { data: balance } = useBalance({
    address,
  });

  console.log(urlAddress);
  useEffect(() => {
    setAmount("");
  }, [address]);

  useMemo(() => {
    const cardData = vaultsCardPrismaData.find(
      (card) => card.address === urlAddress
    );
    console.log(cardData);
    setData(cardData);
  }, [urlAddress]);

  const handleApprove = async () => {
    try {
      const approveHash = await approve({
        abi: TroveApproveABI,
        address: urlAddress as AddressString,
        functionName: "approve",
        args: [BorrowerContractAdd, ethers.utils.parseUnits(amount, 18)],
      });

      await waitForTransaction(approveHash);
    } catch (error) {
      console.log(error);
      throw new Error("Failed to Approve token.");
    }
  };

  const handleOpenTrove = async () => {
    try {
      // const _maxFeePercentage = ethers.utils
      //   .parseUnits(amount.toString(), 18)
      //   .toBigInt();
      // const _collateralAmount = ethers.utils
      //   .parseUnits(amount.toString(), 18)
      //   .toBigInt();
      const _debtAmount = ethers.utils
        .parseUnits(amount.toString(), 18)
        .toBigInt();

      const _maxFeePercentage = "10000000000000000";
      const _collateralAmount = Number("180000000000000000000000") * Number(amount);
      const _upperHint = "0x0000000000000000000000000000000000000000";
      const _lowerHint = "0x0000000000000000000000000000000000000000";

      const openTroveHash = await openTrove({
        abi: BorrowerABI,
        address: BorrowerContractAdd,
        functionName: "openTrove",
        args: [
          BigInt(_maxFeePercentage),
          BigInt(_collateralAmount),
          _upperHint,
          _lowerHint,
        ],
        value: BigInt(_debtAmount)
      });

      await waitForTransaction(openTroveHash);
      setAmount("");
      // refetch();
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong while opening Vaults.");
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^(0|[1-9]\d*)(\.\d+)?$/;
    const val = Number(e.target.value);

    if (regex.test(val.toString())) {
      return setAmount(val.toString());
    }
  };

  const handleTransaction = async () => {
    if (!isConnected) {
      return toast.warn("Please connect your wallet.");
    }

    if (!Number(amount)) {
      return toast.warn("Please enter an amount");
    }

    if (+amount > Number(balance)) {
      return toast.warn("Insufficient Balance");
    }

    const promise = new Promise(async (resolve, reject) => {
      try {
        if (trove?.[3] === 1) {
          throw new Error("You already have a trove.");
        }
        // await handleApprove();
        await handleOpenTrove();
        refetchTrove();
        modal.setOpen({
          modalType: "TransactionConfirmation",
          type: "success",
          open: true,
          data: <>Successfully created vaults</>,
        });
        resolve("Successfully created vaults");
      } catch (error) {
        const e = error as Error;
        console.log(e);
        modal.setOpen({
          modalType: "TransactionConfirmation",
          type: "error",
          open: true,
          data: <>{e.message}</>,
        });
        reject(e.message);
      }
    });

    toast.promise(promise, {
      pending: "Transaction in progress...",
    });
  };

  console.log("balance?.value", balance?.value)

  return (
    <div className="flex flex-col items-center justify-center w-full container">
      <Typography className="text-[28px] font-semibold text-center">
        {data?.prismaType === "prisma"
          ? "Determine how much LUSD you want"
          : "Determine how much ULTRA you want "}
      </Typography>

      <div className="w-[500px] max-w-[500px] rounded-sm items-center mt-4 bg-[#1A202C]">
        <div className="bg-darkBlue flex justify-between py-4 px-3 items-center rounded-t-sm">
          <Typography className="font-semibold text-body text-white">
            {data?.prismaType === "prisma" ? "Mint LUSD" : "Mint ULTRA"}
          </Typography>
          <div className="bg-primary font-semibold text-[13px] py-2 px-3 text-black rounded-[10px]">
            <Typography>3.47% - 6.94% APR</Typography>
          </div>
        </div>

        <div className="w-full px-6 pb-4">
          <div className="mt-4 flex justify-between">
            <div></div>

            <div className="flex gap-2 mb-1 items-center">
              <Typography className="text-md  font-medium">Balance:</Typography>
              <Image
                src={data?.icon || ""}
                width={100}
                height={100}
                alt="eth"
                className="size-4 rounded-full"
              />

              <Typography className="text-md  font-medium">
                {(Number(balance?.value)/10**18)} ETH
              </Typography>
            </div>
          </div>

          <div className="flex justify-between items-center rounded-[8px] border border-primary">
            <div className="flex-1">
              <Input
                placeholder="Enter an amount"
                inputClassNames="text-white !p-3"
                type="number"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>

            <div className="flex gap-2 items-center pr-3">
              <button className="bg-lightBlue rounded text-sm font-bold py-[1px] px-1 text-white">
                Max
              </button>
              <Image
                src={data?.icon || ""}
                width={100}
                height={100}
                alt="eth"
                className="size-4"
              />

              <Typography className="text-body text-white font-medium">
                {"ETH"}
              </Typography>
            </div>
          </div>

          <div className="flex justify-between items-center my-3">
            <Typography className="text-left font-medium text-md">
              Calculate Debt
            </Typography>
            <div className="py-[6px] px-2 flex items-center rounded-[8px] border border-primary">
              <Typography className="text-body font-bold text-[#fff]">
                100 %
              </Typography>
            </div>
          </div>

          <div className="flex flex-col rounded-[8px] border border-primary mt-2">
            <div className="bg-primary w-full rounded-tr-[8px] px-2 py-1">
              <Typography className="text-black font-medium text-md text-left">
                {data?.prismaType === "prisma"
                  ? "Minting LUSD"
                  : "Minting ULTRA"}
              </Typography>
            </div>
            <div className="flex justify-between rounded-[8px]">
              <div className="flex-1">
                <Input
                  placeholder="Enter an amount"
                  type="number"
                  value={(Number("180000000000000000000000") * Number(amount))/10**18}
                  inputClassNames="text-white !p-3"
                  disabled
                  onChange={handleAmountChange}
                />
              </div>

              <div className="flex gap-2 items-center pr-3">
                <button className="bg-lightBlue rounded text-sm font-bold py-[1px] px-1 text-white">
                  Max
                </button>
                <Image src={UltraIcon} alt="" className="size-4" />

                <Typography className="text-body text-white font-medium">
                  {data?.prismaType === "prisma" ? "LUSD" : "ULTRA"}
                </Typography>
              </div>
            </div>
          </div>

          {/* <div className="text-md flex flex-col gap-1 font-medium  mt-4 rounded-sm p-2">
            <div className="flex justify-between">
              <Typography>+Net debt</Typography>
              <Typography>
                0.00 {data?.prismaType === "prisma" ? "LUSD" : "ULTRA"}
              </Typography>
            </div>

            <div className="flex justify-between">
              <Typography>+Mint Fee</Typography>
              <Typography>
                (0.64%) 0.00 {data?.prismaType === "prisma" ? "LUSD" : "ULTRA"}
              </Typography>
            </div>
            <div className="flex justify-between">
              <Typography>+Liquidation Reserve </Typography>
              <Typography>
                200 {data?.prismaType === "prisma" ? "LUSD" : "ULTRA"}
              </Typography>
            </div>
            <div className="bg-separator !w-full h-[1px] my-2"></div>
            <div className="flex justify-between">
              <Typography>Your total debt</Typography>
              <Typography className="text-[#16C720]">
                0.00 {data?.prismaType === "prisma" ? "LUSD" : "ULTRA"}
              </Typography>
            </div>
          </div> */}

          {/* <div className="border border-[#FF0000] bg-[#ff000047] text-md font-normal text-[#fff] flex items-center justify-center p-3 rounded-[8px] mt-4">
            <Typography>
              A minimum debt of 1800{" "}
              {data?.prismaType === "prisma" ? "LUSD" : "ULTRA"} is required
            </Typography>
          </div> */}

          {/* {chainId !== CUSTOM_CHAIN_CONFIG.depo.chainId ? (
            <Typography className=" text-body font-normal text-center mt-3">
              Please connect to Depo in your wallet.
            </Typography>
          ) : (
            <>
              <div className="flex mt-2">
                <Button
                  onClick={handleApprove}
                  disabled={isLoadingApprove}
                  className={`mx-3 mt-1 w-1/2 bg-primary !text-black font-bold text-md py-[6px] px-4 mb-4`}
                >
                  {isLoadingApprove ? "Loading..." : "Approve"}
                </Button>
                <Button
                  onClick={handleOpenTrove}
                  className={`mx-3 mt-1 w-1/2 border font-bold text-md py-[6px] px-4 mb-4 ${
                    isApproved
                      ? "bg-white border-lightBlue !text-lightBlack"
                      : "bg-white border-lightBlue !text-lightBlack opacity-30 cursor-not-allowed"
                  }`}
                  disabled={!isApproved}
                >
                  {isLoadingTrove ? "Loading..." : "Open Vault"}
                </Button>
              </div>
            </>
          )} */}

          <Button
            onClick={handleTransaction}
            className={`mt-2 w-full border font-bold text-md py-[6px] px-4 border-primary bg-primary !text-black`}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Open Vault"}
          </Button>

          {/* <div className="bg-separator !w-full h-[1px] mt-2"></div>

          <div className="font-normal text-md  mt-4 gap-2">
            <Typography className="font-bold mb-3 text-left">
              Information
            </Typography>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Typography>Vault position</Typography>
                <Typography className="font-bold text-[#FF747A]">
                  0/13
                </Typography>
              </div>

              <div className="flex justify-between">
                <Typography>Debt in front</Typography>
                <Typography className="font-bold text-[#FF747A]">
                  0.0 {data?.prismaType === "prisma" ? "LUSD" : "ULTRA"}
                </Typography>
              </div>

              <div className="flex justify-between">
                <Typography>Collat. Ratio</Typography>
                <Typography className="font-bold text-[#16C784]">
                  0.00%
                </Typography>
              </div>

              <div className="flex justify-between">
                <Typography>Liquidation Price</Typography>
                <Typography className="font-bold text-[#16C784]">
                  $0.00
                </Typography>
              </div>

              <div className="flex justify-between">
                <Typography>Borrow Interest Rate</Typography>
                <Typography>10.00% </Typography>
              </div>

              <div className="flex justify-between">
                <Typography>
                  Remaining Mintable{" "}
                  {data?.prismaType === "prisma" ? "LUSD" : "ULTRA"}
                </Typography>
                <Typography>95,690,007.21</Typography>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SelectVaultForm;
