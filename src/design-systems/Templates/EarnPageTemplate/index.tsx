"use client";

import StabilityTable from "@/design-systems/Molecules/StabilityTable";
import PoolTableTemplate from "../PooltableTemplate";

const EarnPageTemplate: React.FC = () => {
  return (
    <div className="flex flex-col items-center container">
      <StabilityTable />

      <PoolTableTemplate />
    </div>
  );
};
export default EarnPageTemplate;
