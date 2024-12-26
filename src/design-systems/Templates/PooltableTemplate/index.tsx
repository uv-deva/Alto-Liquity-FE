import PoolTable from "@/design-systems/Molecules/PoolTable";
import { useState } from "react";
import { bigPoolData } from "./utils";
import Input from "@/design-systems/Atoms/Input";
import Toggle from "@/design-systems/Atoms/Toggle";
import Typography from "@/design-systems/Atoms/Typography";
import Button from "@/design-systems/Atoms/Button";

const PooltableTemplate = () => {
  const [hideSmallPools, setHideSmallPools] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("all");

  const handleTabChange = (tab: string) => setActiveTab(tab);

  const [isSendAutometic, setIsSendAutometic] = useState<boolean>(false);

  const handleThemeChange = (isChecked: boolean) => {
    setIsSendAutometic(true);
  };

  return (
    <div className="w-full mt-2 shadow-lg bg-[#1A202C] rounded-[12px] border border-separator">
      <div className="p-6">
        <div className="w-full">
          <div className="flex justify-between lg:flex-row flex-col lg:items-center mb-4 gap-2">
            <div className="flex flex-wrap gap-x-2">
              {["all", "curve", "convex", "my"].map((tab) => (
                <Button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`p-3 text-md font-medium ${
                    activeTab === tab ? "bg-[#2a363e] text-[#a2a2a2]" : ""
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Pools
                </Button>
              ))}
            </div>
            <div className="flex md:items-center items-start md:flex-row flex-col gap-4">
              <Typography className="text-md font-normal flex md:flex-row flex-col gap-2">
                Hide small pools (&lt; $1000)
              </Typography>
              <Toggle
                className="h-[20px] w-[60px]"
                defaultCheck={false}
                onChange={handleThemeChange}
              />
              <div>
                <Input
                  placeholder="Search"
                  type="text"
                  className="!rounded-[8px] !border !border-[#88b4f54d]"
                  inputClassNames="!p-3 !rounded-[8px] text-white"
                />
              </div>
            </div>
          </div>
          <PoolTable
            data={bigPoolData}
            searchTerm={searchTerm}
            hideSmallPools={hideSmallPools}
            activeTab={activeTab}
          />
        </div>
      </div>
    </div>
  );
};

export default PooltableTemplate;
