"use client";
import { useState } from "react";
import { tabs, vaultsCardPrismaData, vaultsCardPrismaLRTData } from "./utils";
import { PrismaSvg, PrismaLRT } from "@/design-systems/Atoms/Icons";
import Typography from "@/design-systems/Atoms/Typography";
import Button from "@/design-systems/Atoms/Button";
import VaultsCard from "@/design-systems/Molecules/VaultsCard";
import bgCoverImg from "@/assets/image/bg-cover-img.jpg";
import { toast } from "react-toastify";

const HomePageTemplate: React.FC = () => {
  const [saleType, setSaleType] = useState<string>("prisma");

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex items-center md:flex-row flex-col gap-2 justify-between rounded-full mt-4 md:mt-0 w-full container">
        {saleType === "prismaLRT" ? (
          <Typography className="md:text-[36px] text-[28px] md:text-left text-center font-medium">
            Choose an LRT to mint ULTRA
          </Typography>
        ) : (
          <Typography className="md:text-[36px] text-[28px] md:text-left text-center font-medium">
            Choose an LST to mint LUSD
          </Typography>
        )}

        <div className="flex gap-2 sm:flex-row flex-col">
          {tabs.map(({ name }) => (
            <Button
              className={`cursor-pointer bg-[#1A202C] flex justify-center items-center w-[200px] h-[56px] text-small font-semibold leading-[14px] ${
                name === saleType
                  ? "border-[3px] border-primary bg-primary !text-black"
                  : "border-[3px] border-primary"
              }`}
              key={name}
              onClick={() => setSaleType(name)}
            >
              {name === "prisma" ? <PrismaSvg /> : <PrismaLRT />}
            </Button>
          ))}
        </div>
      </div>

      <div className="container flex justify-center mt-6">
        <div className="flex gap-6 flex-col justify-center items-center w-full">
          <div className="relative rounded-[16px] md:overflow-hidden bg-[#316eff] w-full">
            <div className="relative z-10 md:basis-[65%] basis-full flex md:flex-row flex-col gap-2 items-center justify-between rounded-[16px] px-6 py-4">
              {saleType === "prisma" && (
                <Typography className="text-white text-[20px] text-center font-medium md:w-[70%] w-full md:text-left">
                  Earn up to <span className="font-bold">16.67% APR</span> on
                  any LUSD you mint by depositing into the Stability Pool.
                </Typography>
              )}

              {saleType === "prismaLRT" && (
                <Typography className="text-white text-[20px] font-medium md:w-[70%] w-full text-center md:text-left">
                  Earn up to <span className="font-bold">34.10% APR</span> on
                  any ULTRA you mint by depositing into the Stability Pool.
                </Typography>
              )}

              <div className="flex sm:flex-row flex-col gap-2">
                <Button
                  onClick={() => toast.warn("Coming Soon!")}
                  className="py-[6px] px-4 border border-white rounded text-white hover:bg-white hover:text-black"
                >
                  Take me there
                </Button>

                <Button
                  onClick={() => toast.warn("Coming Soon!")}
                  className="py-[6px] px-4 border border-white rounded text-white hover:bg-white hover:text-black"
                >
                  More opportunities
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid xmd:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-7 w-full container justify-center flex-wrap gap-7">
        {saleType === "prisma" && (
          <>
            {vaultsCardPrismaData.map((card) => (
              <VaultsCard
                address={card.address}
                cardType="prism"
                key={card.type}
                icon={card.icon}
                type={card.type}
                name={card.name}
                description={card.description}
              />
            ))}
          </>
        )}

        {saleType === "prismaLRT" && (
          <>
            {vaultsCardPrismaLRTData.map((card) => (
              <VaultsCard
                address={card.address}
                prismLRTDesc={card.prismLRTDesc}
                cardType="prismLRT"
                icon={card.icon}
                key={card.type}
                type={card.type}
                name={card.name}
                description={card.description}
              />
            ))}
          </>
        )}

        {/* <VaultsCard /> */}
      </div>
    </div>
  );
};

export default HomePageTemplate;
