import { TooltipIcon } from "@/design-systems/Atoms/Icons";
import Typography from "@/design-systems/Atoms/Typography";
import React from "react";

const YourRewardCard: React.FC = () => {
  return (
    <div className="bg-[#1A202C] shadow-lg rounded-sm md:basis-1/2 flex-1 p-4 border border-separator">
      <div className="flex gap-8 justify-between sm:flex-row flex-col">
        <div className="flex flex-col items-start justify-start">
          <div className="flex items-center gap-1">
            <Typography className="font-bold text-md">Your Rewards</Typography>
            <TooltipIcon />
          </div>
          <div className="flex flex-col items-start mt-2">
            <Typography className="text-[32px] font-bold">$0.00</Typography>
            <Typography className="text-md font-normal">
              Lockable with a max boost
            </Typography>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <Typography className="font-bold text-md">
              Your Deposits&nbsp;
            </Typography>
            <TooltipIcon />
          </div>
          <div className="flex justify-start mt-2">
            <Typography className="text-[32px] font-bold">$0.00</Typography>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-end gap-1">
            <Typography className="text-md font-bold">Your Boost</Typography>
            <TooltipIcon />
          </div>

          <div className="flex flex-col items-end mt-2">
            <Typography className="text-[32px] font-bold">0.00x</Typography>
            <Typography className="text-md font-normal">
              Up to 0.00 LQTY
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourRewardCard;
