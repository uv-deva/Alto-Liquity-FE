"use client";
import { useState } from "react";
import BoostCard from "@/design-systems/Molecules/RewardBoostCard";
import EarnedWithMaxBoostCard from "@/design-systems/Molecules/EarnedWithMaxBoostCard";
import RewardCard from "@/design-systems/Molecules/YourRewardCard";
import VeLQTYFeesCard from "@/design-systems/Molecules/VeLQTYFeesCard";
import { AccordionEarnData, BoostFeeColData, BoostFeeData } from "./utils";
import RewardsAccordion from "@/design-systems/Molecules/RewardsAccordion";

const RewardPageTemplate: React.FC = () => {
  return (
    <div className="container">
      <div className="flex md:flex-row flex-col justify-center gap-2 w-full">
        <RewardCard />
      </div>

      <EarnedWithMaxBoostCard />

      <div className="mt-4">
        <VeLQTYFeesCard />
      </div>

      <div>
        {AccordionEarnData.map((data) => {
          return (
            <RewardsAccordion
              key={data.id}
              label={data.name}
              type={data.id}
              rowData={BoostFeeData}
              columns={BoostFeeColData}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RewardPageTemplate;
