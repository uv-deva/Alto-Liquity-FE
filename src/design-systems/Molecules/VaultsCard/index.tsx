"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from 'react';

import type { VaultsCardProps } from "./interface";

import Typography from "@/design-systems/Atoms/Typography";
import {
  LiquityStoreState,
  Decimal,
  Trove,
  LUSD_LIQUIDATION_RESERVE,
  LUSD_MINIMUM_NET_DEBT,
  Percent
} from "@liquity/lib-base";
import { LiquityStoreProvider, useLiquitySelector } from "@liquity/lib-react";

const EMPTY_TROVE = new Trove(Decimal.ZERO, Decimal.ZERO);
const TRANSACTION_ID = "trove-creation";
const GAS_ROOM_ETH = Decimal.from(0.1);

const VaultsCard: React.FC<VaultsCardProps> = ({
  name,
  icon,
  cardType,
  prismLRTDesc,
  address,
}) => {
  const history = useRouter();

  // const { fees, price, accountBalance, validationContext } = useLiquitySelector(selector);
  // const borrowingRate = fees.borrowingRate();
  // const [borrowAmount, setBorrowAmount] = useState<Decimal>(Decimal.ZERO);

  // const [collateral, setCollateral] = useState<Decimal>(Decimal.ZERO);

  // const fee = borrowAmount.mul(borrowingRate);
  // const feePct = new Percent(borrowingRate);
  // const totalDebt = borrowAmount.add(LUSD_LIQUIDATION_RESERVE).add(fee);
  // const isDirty = !collateral.isZero || !borrowAmount.isZero;
  // const trove = isDirty ? new Trove(collateral, totalDebt) : EMPTY_TROVE;
  // const maxCollateral = accountBalance.gt(GAS_ROOM_ETH)
  //   ? accountBalance.sub(GAS_ROOM_ETH)
  //   : Decimal.ZERO;
  // const collateralRatio =
  // !collateral.isZero && !borrowAmount.isZero ? trove.collateralRatio(price) : undefined;

  // const [troveChange, description] = validateTroveChange(
  //   EMPTY_TROVE,
  //   trove,
  //   borrowingRate,
  //   validationContext
  // );


  return (
    <div className="bg-[#1A202C] border border-separator col-span-1 rounded-sm shadow-lg items-center relative">
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex items-center justify-center gap-2">
          <Image
            className="size-12 rounded-full object-cover"
            src={icon}
            alt="card-icon"
            width="100"
            height="100"
          />
          <Typography className="text font-bold text-subtitle">
            {name}
          </Typography>
          <Typography className="border-blue border-[2px] px-2 rounded-[6px] font-medium flex items-center text-white">
            v2
          </Typography>
        </div>

        <div className="border-t border-b border-separator flex flex-col px-4 ">
          <div className="flex justify-between text-sm border-b border-[#0022371a] py-[5px]">
            <Typography className="font-normal">Liquidation Reserve</Typography>
            <Typography className="font-bold">200 LUSD</Typography>
          </div>
          <div className="flex justify-between text-sm border-b border-[#0022371a] py-[5px]">
            <Typography className="font-normal">Borrowing Fee</Typography>
            <Typography className="font-bold">9.00 LUSD(0.50%)</Typography>
          </div>
          <div className="flex justify-between text-sm border-b border-[#0022371a] py-[5px]">
            <Typography className="font-normal">Total debt</Typography>
            <Typography className="font-bold">2,009.00 LUSD</Typography>
          </div>
        </div>
        <div className="flex flex-col px-4 gap-2">
          <div className=" flex justify-between py-[3px] rounded-md text-sm text-white">
            <Typography className="font-normal">Collateral ratio</Typography>

            <Typography className="font-bold">100%</Typography>
          </div>
        </div>
        {/*<div className=" flex justify-between py-[3px] rounded-md text-sm text-white">
            <Typography className="font-normal">
              Borrow Interest Rate
            </Typography>

            <Typography className="font-bold">14.99%</Typography>
          </div>

          <div className=" flex justify-between py-[3px] rounded-md text-sm text-white">
            <Typography className="font-normal">Redemption Rebate</Typography>

            <Typography className="font-bold">0.00%</Typography>
          </div>

          {cardType === "prism" && (
            <div className=" flex justify-between py-[3px] rounded-md text-sm text-white">
              <Typography className="font-normal">Staked Ether APR</Typography>

              <Typography className="font-bold">2.8%</Typography>
            </div>
          )}
        </div> */}

        <div className="px-4 my-2">
          <div
            className="w-full flex text-white bg-blue225 items-center justify-between rounded-[8px] px-[16px] py-[10px]"
            style={
              {
                // background: `url('${"https://app.prismafinance.com/earned-illustration.svg"}') center center / 108% no-repeat`,
              }
            }
          >
            <Typography className="text-body font-bold">APR</Typography>
            <div className="flex gap-1">
              <Typography className="text-md font-bold">
                29.61% 59.22%
              </Typography>

              <div className="w-[22px] h-[22px] bg-white rounded-[50%]"></div>
            </div>
          </div>
        </div>

        {cardType === "prismLRT" && (
          <div className="w-full flex text-white items-center justify-between rounded-[18px] px-2 py-2">
            <Typography className="font-medium text-sm">
              {prismLRTDesc}
            </Typography>
          </div>
        )}

        <button
          className={`mt-1 bg-[#3d404a] text-white font-bold text-md py-[6px] px-4 rounded-b-[18px]`}
          onClick={() => history.push(`select/${"0xF6eF5A6a38DB44c0F8bb546B3a1f7A44a46Ef743"}`)}
        >
          Choose {name}-v2
        </button>
      </div>

      {/* <Image
        className="absolute top-[-2%] left-[-10%]"
        src={icon}
        alt="card-icon"
        width="70"
        height="70"
      /> */}
    </div>
  );
};

export default VaultsCard;
