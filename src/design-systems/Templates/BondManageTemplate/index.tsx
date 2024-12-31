"use client";

import { InfoOutlineIcon } from "@/design-systems/Atoms/Icons";
import Typography from "@/design-systems/Atoms/Typography";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { useEffect, useMemo, useState } from "react";
import { TabsBond } from "./tabsBond";
import { useRouter, useSearchParams } from "next/navigation";
import { bigPoolData, bigPoolDataType } from "../PooltableTemplate/utils";
import { useAccount } from "wagmi";
import { UserAddressType } from "./interface";
import {
  ChickenBondContractAdd,
} from "@/utils/Contract";

const BondManageTemplate: React.FC = () => {
  const { address, isConnected } = useAccount();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [data, setData] = useState<bigPoolDataType | undefined>(undefined);
  const searchParams = useSearchParams();
  const poolAddress = searchParams.get("address");
  const router = useRouter();
  const [userAddress, setUserAddress] = useState<UserAddressType>({
    tokenAdd: "",
    poolAdd: "",
  });
  const tabs = [{ label: "Create Bond" }];
  useMemo(() => {
    const cardData = bigPoolData.find(
      (card) => card.poolAddress === poolAddress
    );
    setData(cardData);
  }, [poolAddress]);
  useEffect(() => {
    if (address) {
      setUserAddress((prevState: UserAddressType) => ({
        ...prevState,
        tokenAdd: `${address.slice(0, 4)}...${address.slice(-4)}`,
      }));
      setUserAddress((prevState: UserAddressType) => ({
        ...prevState,
        poolAdd: `${data?.poolAddress.slice(0, 4)}...${data?.poolAddress.slice(
          -4
        )}`,
      }));
    }
  }, [address, data?.poolAddress]);

  return (
    <div className="max-sm:p-[20px] max-w-[700px] lg:max-w-[1200px] w-full">
        <>
          <div className="flex justify-between w-full flex-wrap">
            <button
              className="flex gap-1 items-center justify-center cursor-pointer"
              onClick={() => router.back()}
            >
              <div className="text-primary h-4 w-4">
                <ArrowLeftIcon />
              </div>
              <Typography className="text-primary text-[14px] sm:text-[16px]">
                Back
              </Typography>
            </button>
            <div className="flex gap-2 flex-wrap text-[14px] sm:text-[16px]">
              <div className="bg-skyBlue py-[6px] px-[8px] sm:px-[12px] rounded-[18px] text-primary">
                {data?.name}: {userAddress.tokenAdd}
              </div>
              <div className="bg-skyBlue py-[6px] px-[8px] sm:px-[12px] rounded-[18px] text-primary">
                {data?.name} Bond: {ChickenBondContractAdd.slice(0, 4)}...{ChickenBondContractAdd.slice(-4)}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-start mt-3 ">
            <div className="rounded-[8px] bg-[#1A202C]">
              <div className="bg-lightBlack p-2 sm:p-4 rounded-t-[12px] text-white text-[14px] sm:text-[16px] font-semibold">
                Manage {data?.name} Bond
              </div>
              <div className="w-full border-separator border-b h-[1px]" />
              <div>
                <div className="p-3 sm:p-6 text-[14px] sm:text-[16px] text-center">
                When the bLUSD market price is less than 3% above the floor price,
                its not profitable to bond. Buying bLUSD from the market currently
                generates a higher return than bondingRead more.
                </div>

                <div>
                  <div className="flex border-b-2 border-[#232931]">
                    {tabs.map((tab, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`py-2 px-4 transition-colors duration-300 font-medium text-sm sm:text-md ${
                          activeTab === index
                            ? "border-b-2 border-primary text-primary"
                            : "text-blue135"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                  <div className=" p-3 sm:p-6 rounded-b-[8px] px-[15px] sm:px-[32px]">
                    <TabsBond data={data} activeTab={activeTab} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-3 text-blue135 text-[11px] sm:text-[14px] font-bold px-[8px] sm:px-[13px] py-[10px] sm:py-[16px] rounded-[8px] shadow-card-shadow">
                <div>bLUSD</div>
                <div className="flex gap-1 items-center pl-4">
                  Statistics{" "}
                  <div className="h-[14px] w-[14px] fill-blue135 ">
                    <InfoOutlineIcon />
                  </div>
                </div>
                <div className="pl-4">Treasury </div>
              </div>
              <div className="w-full border-separator border-b h-[1px]" />
              <div className="grid grid-cols-3 text-[20px] sm:text-[32px] font-bold px-[13px] py-[11px] sm:py-[16px] bg-[#1A202C] rounded-[8px] shadow-card-shadow">
                <div className="text-primary  font-bold flex items-start">
                  <div className="text-sm text-white w-full">
                    <div className="grid grid-cols-2 gap-y-2">
                      <div>Market price:</div>
                      <div className="font-semibold text-right">1.263 LUSD</div>
                      <div>Fair price:</div>
                      <div className="font-semibold text-right">1.80 - 1.95 LUSD</div>
                      <div>Floor price:</div>
                      <div className="font-semibold text-right">1.2835 LUSD</div>
                      <div>Net asset value:</div>
                      <div className="font-semibold text-right">1.7983 LUSD</div>
                      <div>bLUSD APR:</div>
                      <div className="font-semibold text-right">N/A %</div>
                      <div>LP APR:</div>
                      <div className="font-semibold text-right">0.00 %</div>
                      <div>Yield amplification:</div>
                      <div className="font-semibold text-right">N/A x</div>
                      <div>Total supply:</div>
                      <div className="font-semibold text-right">1.90M bLUSD</div>
                    </div>
                  </div>
                </div>
                <div className="text-primary  font-bold flex items-start pl-4">
                  <div className="text-sm text-white w-full">
                    <div className="grid grid-cols-2 gap-y-2">
                      <div>Pending bonds</div>
                      <div className="font-semibold text-right">277</div>
                      <div>Cancelled bonds</div>
                      <div className="font-semibold text-right">1,663</div>
                      <div>Claimed bonds</div>
                      <div className="font-semibold text-right">697</div>
                      <div>Total bonds</div>
                      <div className="font-semibold text-right">2,637</div>
                    </div>
                  </div>
                </div>
                <div className="text-primary  font-bold flex items-start pl-4">
                  <div className="text-sm text-white w-full">
                    <div className="grid grid-cols-2 gap-y-2">
                      <div className="text-left">Pending</div>
                      <div className="font-semibold text-right">285K LUSD</div>
                      <div className="text-left">Reserve</div>
                      <div className="font-semibold text-right">2.44M LUSD</div>
                      <div className="text-left">Permanent</div>
                      <div className="font-semibold text-right">981K LUSD</div>
                      <div className="text-left">Total</div>
                      <div className="font-semibold text-right">3.71M LUSD</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    </div>
  );
};
export default BondManageTemplate;
