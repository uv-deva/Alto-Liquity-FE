import { TooltipIcon } from "@/design-systems/Atoms/Icons";
import Typography from "@/design-systems/Atoms/Typography";
import React from "react";

const RewardBoostCard: React.FC = () => {
  return (
    <div className="bg-[#1A202C] shadow-lg rounded-tr-sm basis-1/2 flex-1 p-4">
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <Typography className="text-md font-bold">Your Boost</Typography>
        
          <TooltipIcon />
        </div>

        <div className="flex flex-col items-start mt-2"
        >

          <Typography className="text-[32px] font-bold">0.00x</Typography>
          <Typography className="text-md font-normal">Up to 0.00 PRISMA</Typography>
        </div>
      </div>
    </div>
  );
};

export default RewardBoostCard;
