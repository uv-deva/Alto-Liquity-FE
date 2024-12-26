import Button from "@/design-systems/Atoms/Button";
import Toggle from "@/design-systems/Atoms/Toggle";
import Typography from "@/design-systems/Atoms/Typography";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import EarnIcon from "@/assets/image/Icons/earnedIcon.svg";
import { EarnIconBig } from "@/design-systems/Atoms/Icons";

const EarnedWithMaxBoostCard: React.FC = () => {
  // const [hideSmallBalances, setHideSmallBalances] = useState<boolean>(true);

  const [isSendAutometic, setIsSendAutometic] = useState<boolean>(false);

  const handleThemeChange = (isChecked: boolean) => {
    setIsSendAutometic(true);
  };

  return (
    <div className="flex gap-3 mt-4 md:items-center justify-center md:flex-row flex-col rounded-sm border border-separator">
      <div className="rounded-sm bg-[#1A202C] p-4 shadow-lg md:basis-[68%] flex-1">
        <div className="mb-4 flex md:flex-row flex-col justify-between">
          <Typography className="text-subtitle md:text-center text-left font-semibold">
            Rewards
          </Typography>
          <div className="mt-2 flex items-center gap-2">
            <Typography className="mr-4 text-md font-normal">
              Hide Small Balances (&lt; 0.01)
            </Typography>

            <Toggle
              className="h-[20px] w-[60px]"
              defaultCheck={false}
              onChange={handleThemeChange}
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-9">
          <div className="flex flex-col justify-between items-start gap-2">
            <Typography className="text-body text-left basis-auto">
              There are a number of ways to earn LQTY, such as minting LUSD
              or ULTRA against a collateral or by depositing LUSD or ULTRA into
              the Stability Pool. Each week, the amount of LQTY allocated to
              these actions changes depending on the outcome of the emissions
              vote.
            </Typography>
            <Button className="border-primary border py-[6px] px-4">
              {/* <Link href="" className=""> */}
                Learn more
              {/* </Link> */}
            </Button>
          </div>
          <div className="rounded-sm flex flex-col gap-1 md:items-end items-start flex-1 basis-1/2">
            <Typography className="text-md font-bold">
              Earned with max boost
            </Typography>
            <div className="flex items-start gap-1">
              <EarnIconBig />

              <div className="">
                <Typography className="text-[30px] font-bold leading-[30px]">0.00</Typography>
                <Typography className="text-lg text-end font-normal">$0.00</Typography>
              </div>
            </div>
            <Button
              className="!text-black bg-primary w-full cursor-not-allowed rounded py-[6px] px-4"
              disabled
            >
              Lock All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarnedWithMaxBoostCard;
