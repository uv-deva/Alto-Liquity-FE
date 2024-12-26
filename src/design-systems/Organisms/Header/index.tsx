"use client";

import { DropDownIcon, StarIcon } from "@/design-systems/Atoms/Icons";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAccount, useDisconnect, useSwitchChain } from "wagmi";
import { toast } from "react-toastify";
import { NavData } from "./utils";
import { SUPPORTED_CHAIN_ID } from "@/utils";
import { AltoSvgLogo } from "@/assets/image/icons";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Button from "@/design-systems/Atoms/Button";
import { useModal } from "@/hooks/useModal";

const Header: React.FC = () => {
  const { address, isConnected, chainId } = useAccount();
  const { switchChain } = useSwitchChain();
  const pathName = usePathname();
  const router = useRouter();
  const [userAddress, setUserAddress] = useState<string>("");
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  const { setOpen } = useModal();

  useEffect(() => {
    if (address) {
      setUserAddress(`${address.slice(0, 4)}...${address.slice(-4)}`);
      toast.success("Wallet connected successfully.");
      setOpen({ open: false });
    }
  }, [address, setOpen]);

  useEffect(() => {
    if (isConnected && chainId !== SUPPORTED_CHAIN_ID) {
      switchChain(
        { chainId: SUPPORTED_CHAIN_ID },
        {
          onSuccess: () => {
            toast.success("Successfully switch chain.");
          },
          onError: (e) => {
            console.log(e);
            toast.error("Failed switch chain.");
          },
        }
      );
    }
  }, [chainId, switchChain, isConnected]);

  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMobileMenu]);

  const headerMenuItems = useMemo(() => {
    return (
      <>
        {NavData.map((item, key) => (
          <div
            key={key}
            className="relative flex xl:items-center items-start cursor-pointer"
          >
            <div
              key={key}
              onClick={() => router.push(item.path)}
              className={`refont-normal no-underline px-[30px] py-6 text-[14px] text-left flex-1`}
            >
              {item.label}
            </div>
            {pathName === item.path && (
              <div className="bottom-0 bg-primary absolute h-[2px] w-full"></div>
            )}
          </div>
        ))}
        {/* <div
          className="font-normal items-center relative flex cursor-pointer  no-underline px-[40px] xl:pt-[15px] xl:pb-[20px] py-4 text-[14px]"
          onClick={() => handleChainDropdown()}
        >
          <Typography>More</Typography>
          <div className="h-[24px] w-[24px]">
            <DropDownIcon />
          </div>

          <MoreDropDown isChainDropdownOpen={chainDropdown} />
        </div> */}
      </>
    );
  }, [pathName, router]);

  const walletConnectButton = useMemo(() => {
    return (
      <>
        <StarIcon />
        {isConnected && address ? (
          <Button className="relative text-[14px] py-[6px] px-[20px] bg-primary !text-black group">
            <div className="flex items-center w-full">
              {userAddress}
              <div className="size-5">
                <DropDownIcon />
              </div>
            </div>
            <div className="absolute right-0 top-full bg-[#1A202C] border border-separator rounded w-full hidden group-hover:block">
              <ul className="text-white text-left w-full h-full space-y-2">
                <li
                  className="hover:bg-[#ffffff1c] px-2 py-2"
                  onClick={() =>
                    setOpen({ open: true, modalType: "WalletConnect" })
                  }
                >
                  Disconnect
                </li>
              </ul>
            </div>
          </Button>
        ) : (
          <Button
            onClick={() => setOpen({ open: true, modalType: "WalletConnect" })}
            className="text-[14px] py-[6px] px-[20px] bg-primary !text-black"
          >
            Connect wallet
          </Button>
        )}
      </>
    );
  }, [address, isConnected, setOpen, userAddress]);

  // const headerData = useMemo(() => {
  //   return (
  //     <>
  //       <HeartIcon />
  //       <span className="text-primary font-bold border-r-[2px] border-r-gray2 pr-3">
  //         384.3%
  //       </span>
  //       <span className="text-purple236 font-bold">231.5</span>
  //     </>
  //   );
  // }, []);

  return (
    <div className="fixed w-full bg-[#1A202C] top-0 xl:py-0 py-4 z-50">
      <div className="items-center w-full justify-between flex gap-3 container">
        <div className="flex gap-8 items-center">
          <div className="size-[35px]">
            <AltoSvgLogo />
          </div>

          <div className="xl:flex hidden items-center">
            <div className="flex">{headerMenuItems}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="sm:flex hidden gap-4 items-center">
            {walletConnectButton}
          </div>

          <div
            className="xl:hidden block cursor-pointer"
            onClick={() => setOpenMobileMenu(true)}
          >
            <Bars3Icon className="h-7 w-7" />
          </div>
        </div>

        <div
          className={`xl:hidden fixed top-0 left-0 h-screen w-screen bg-black opacity-30 z-20 transition-[transform] ${
            openMobileMenu ? "translate-y-0" : "-translate-y-full"
          }`}
          onClick={() => setOpenMobileMenu(false)}
        ></div>
        <div
          className={`fixed top-0 w-[300px] bg-[#1A202C] z-30 h-screen p-4 right-0 transition-[transform] ${
            openMobileMenu ? "translate-x-0" : "translate-x-full"
          } space-y-4 overflow-x-hidden overflow-y-auto`}
        >
          <div className="w-full" onClick={() => setOpenMobileMenu(false)}>
            <XMarkIcon className="ml-auto h-7 w-7" />
          </div>
          <div className="flex flex-col">{headerMenuItems}</div>

          {/* <div className="flex sm:hidden justify-center gap-3 border-[1px] border-gray2 rounded-full py-2">
            {headerData}
          </div> */}

          <div className="flex sm:hidden gap-2 items-center justify-center">
            {walletConnectButton}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
