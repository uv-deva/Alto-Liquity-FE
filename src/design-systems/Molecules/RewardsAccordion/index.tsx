import { useState } from "react";
import Button from "@/design-systems/Atoms/Button";
import { ArrowIcon } from "@/design-systems/Atoms/Icons";
import { RewardsAccordionProps, TableData } from "./interface";
import Typography from "@/design-systems/Atoms/Typography";
import Image from "next/image";
import BoostDisableIcon from "@/assets/image/Icons/BoostDisableIcon.svg";
import EarnedIcon from "@/assets/image/Icons/earnedIcon.svg";

const RewardsAccordion: React.FC<RewardsAccordionProps> = ({
  label,
  type,
  columns,
  rowData,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="rounded-sm bg-[#1A202C] p-6 shadow-lg mb-3 border border-separator">
      <div className="flex items-center justify-between">
        <Typography className="text-lg text-left font-semibold">
          {label}
        </Typography>
        <div className="flex items-center space-x-2">
          <Button
            className="bg-primary w-[120px] rounded px-4 py-1 disabled:bg-white disabled:text-lightBlack disabled:opacity-30 disabled:cursor-not-allowed"
            disabled
          >
            Lock All
          </Button>
          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="expand card content"
            disabled={type === "Boosted01" ? false : true}
          >
            <ArrowIcon
              className={`transform w-8 h-8 !opactiy-50 transition-transform fill-primary stroke-primary ${
                !isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {isOpen && type === "Boosted01" && (
        <div className="mt-4 overflow-x-auto">
          <table className="md:w-full w-[1024px] text-left">
            <thead>
              <tr className="border-b text-sm font-normal">
                {columns.map((column, index) => (
                  <th className="p-4 border-separator border-b" key={index}>
                    {column?.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rowData.map((row: TableData) => (
                <tr key={row.id} className="font-normal text-body">
                  <td className="bg-transparent text-white border-separator border-b">
                    <div className="flex gap-2">
                      <Image
                        src={BoostDisableIcon}
                        alt=""
                        className="w-8 h-8 bg-white rounded-[50%] border-separator border-b"
                      />
                      {row?.disable}
                    </div>
                  </td>
                  <td className="bg-transparent text-white border-separator border-b">
                    {row?.fee}
                  </td>

                  <td className="pb-7 bg-transparent text-white border-separator border-b">
                    <div className="flex gap-2 items-center">
                      <Image src={EarnedIcon} alt="" className="w-6 h-6" />
                      {row?.earned}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RewardsAccordion;
