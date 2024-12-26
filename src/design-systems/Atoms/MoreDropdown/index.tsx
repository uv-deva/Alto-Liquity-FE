import { useEffect, useRef, useState } from "react";
import Typography from "../Typography";
import EarnIcon from "@/assets/image/Icons/earnedIcon.svg";
import MkIcon from "@/assets/image/Icons/mkIcon.svg";
import UltraIcon from "@/assets/image/Icons/ultraIcon.svg";
import { DropdownProps } from "./interface";
import { dropdownOptions, dropdownSocialOptions } from "./utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const MoreDropDown: React.FC<DropdownProps> = ({
  isChainDropdownOpen,
}) => {
  const [isOpen, setIsOpen] = useState<boolean | undefined>(
    isChainDropdownOpen || false,
  );

  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const router = useRouter();

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setIsOpen(isChainDropdownOpen);
  }, [isChainDropdownOpen]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleOptionClick = (id: number) => {
    const selectedOption = dropdownOptions.find((option) => option.id === id);
    if (selectedOption) {
      const newPath =
        selectedOption.path === "redeem"
          ? `/redeem/${selectedOption.urlAddress}`
          : // : `/${selectedOption.path}/${selectedOption.urlAddress}`;
            `/${selectedOption.path}`;

      router.replace(newPath);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="py-2" ref={dropdownRef}>
          <ul
            className={`absolute xl:left-0 left-6 bg-[#1A202C] pt-3 xl:shadow-xl top-[100%] z-[1100] mt-3 w-[168px] duration-300 ease-in-out ${
              isOpen
                ? "overflow-y-auto"
                : "overflow-hidden"
            }`}
          >
            {dropdownOptions.map((option) => (
              <li
                className="item-center py-1 flex cursor-pointer justify-center items-center hover:bg-lightBlack"
                key={option.id}
                onClick={() => handleOptionClick(option.id)}
              >
                <Typography
                  className={`text-[15px] font-normal text-lightBlue`}
                >
                  {option.label}
                </Typography>
              </li>
            ))}
            <div className="bg-theme-gradient !w-full h-[1px] mt-2 mb-2"></div>

            {dropdownSocialOptions.map((option) => (
              <li
                className="item-center py-1 flex cursor-pointer justify-center items-center hover:bg-lightBlack"
                key={option.id}
              >
                <Typography
                  className={`text-[15px] font-normal text-lightBlue`}
                >
                  {option.label}
                </Typography>
              </li>
            ))}

            <div className="bg-theme-gradient !w-full h-[1px] mt-3 mb-3"></div>
            <div className="w-full flex gap-2 justify-center pb-3">
              <Image src={EarnIcon} alt="" className="w-8 h-8" />
              <Image src={MkIcon} alt="" className="w-8 h-8" />
              <Image src={UltraIcon} alt="" className="w-8 h-8" />
            </div>
          </ul>
        </div>
      )}
    </>
  );
};
