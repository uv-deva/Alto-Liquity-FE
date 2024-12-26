/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import {
  CancleIcon,
  InfoIcon,
  InfoIconYellow,
  PowerBy,
  WalletConnectIcon,
} from "@/design-systems/Atoms/Icons";
import { IMG } from "@/assets/image";
import Typography from "@/design-systems/Atoms/Typography";
import Image from "next/image";
import Link from "next/link";
import { useAccount,useBalance, useConnect, useDisconnect } from "wagmi";
import { ModalInterface } from "./interface";
import Button from "@/design-systems/Atoms/Button";
import { AltoSvgLogo } from "@/assets/image/icons";
import { toast } from "react-toastify";

export const ConnectModel: React.FC<ModalInterface> = ({
  setShowModel,
  showModel,
}) => {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { isConnected } = useAccount();
  const handle = (connector: any) => {
    connect({ connector });
  };
  return (
    <div
      className={`h-screen w-screen z-50 fixed top-0 bg-black6 justify-center items-center bg-no-repeat bg-center bg-cover ${
        showModel ? "flex" : "hidden"
      }`}
    >
      {!isConnected && (
        <div className="bg-[#1A202C] z-50 rounded-md text-left min-h-[440px] max-w-[800px] w-full flex">
          <div className="p-4 max-w-[280px] flex justify-between flex-col h-auto border-r-[1px] border-[#28303b]">
            <div className="p-6 gap-4 flex flex-col">
              <div className="flex justify-center">
                <div className="size-[35px]">
                  <AltoSvgLogo />
                </div>
              </div>
              <Typography className="" size="body">
                Connect your wallet
              </Typography>
              <Typography className="text-[14px] text-justify">
                Connecting your wallet is like “logging in” to Web3. Select your
                wallet from the options to get started.
              </Typography>
              <Typography className="text-[14px] text-primary flex gap-1 items-center text-center justify-start">
                <a href="#">I don't have a wallet</a>
                <div className="h-[16px] w-[16px]">
                  <InfoIcon />
                </div>
              </Typography>
            </div>
            <div className="flex justify-center items-center flex-col gap-5">
              <div className="flex w-full items-center justify-center">
                <div className="rounded-full h-[10px] w-[10px] border-[2px] bg-primary border-[#707481]"></div>
                <hr className="min-w-[80px] !bg-[#707481]" />
                <div className="rounded-full h-[8px] w-[8px]  bg-[#707481]"></div>
                <hr className="min-w-[80px] !bg-[#707481]" />
                <div className="rounded-full h-[8px] w-[8px]  bg-[#707481]"></div>
              </div>
              <PowerBy />
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-between p-4 pr-2 items-center w-full border-b-[1px] border-[#28303b]">
              <Typography size="body">
                Available Wallets ({connectors.length})
              </Typography>
              <div
                onClick={() => setShowModel(!showModel)}
                className="rounded-full cursor-pointer bg-[#595959] p-2 w-[32px] h-[32px] "
              >
                <CancleIcon />
              </div>
            </div>
            <div className="p-4 grid grid-cols-2 gap-2">
              {connectors?.map((item: any, key) => (
                <button
                  key={key}
                  onClick={() => handle(item)}
                  className="border-[#28303b] border-[1px] p-4 rounded-md flex items-center"
                >
                  {item.name === "WalletConnect" ? (
                    <div className="flex h-full gap-3 items-center">
                      <div className=" rounded-sm p-2 h-full w-[59px] flex items-center  border-[#28303b] border-[1px]">
                        <WalletConnectIcon />
                      </div>
                      <Typography>WalletConnect</Typography>
                    </div>
                  ) : (
                    <div className="flex h-full gap-3 items-center">
                      <div className="p-2 border-[#28303b] border-[1px] rounded-sm">
                        <Image
                          alt=""
                          width={29}
                          height={29}
                          src={item.icon}
                          className="w-10 rounded-lg "
                        />
                      </div>
                      <Typography>{item.name}</Typography>
                    </div>
                  )}
                </button>
              ))}
            </div>
            <Typography className="mx-4 p-4 flex w-auto justify-between border-[1px] border-orange4c rounded-sm bg-yellow00">
              <div>
                <div className="text-[12px] text-darkBlue">
                  Why don't I see my Wallet?
                </div>
                <Link
                  className="text-[12px] text-primary hover:underline"
                  href={
                    "https://www.blocknative.com/blog/metamask-wont-connect-web3-wallet-troubleshooting"
                  }
                >
                  Click here to learn more
                </Link>
              </div>
              <div className="h-[16px] w-[16px]">
                <InfoIconYellow />
              </div>
            </Typography>
          </div>
        </div>
      )}

      {isConnected && (
        <div className="bg-[#1A202C] z-50 rounded-md text-left min-h-[440px] max-w-[800px] w-full flex">
          <div className="p-2 w-full flex justify-center items-center flex-col">
            <div>
              <svg
                className="w-20 h-20 text-red-600 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="p-4 space-y-2 text-center dark:text-white">
              <h2 className="text-subtitle font-bold tracking-tight">
                Wallet Disconnect Request
              </h2>

              <p className="text-gray-500">Do you want to continue?</p>
            </div>

            <div className="flex gap-6 mt-10">
              <Button
                className="py-[6px] px-[20px] w-[110px] bg-primary !text-black hover:bg-transparent border border-primary hover:!text-white"
                onClick={() => setShowModel(false)}
              >
                Close
              </Button>
              <Button
                className="py-[6px] px-[20px] border border-primary hover:text-black hover:bg-primary w-[110px]"
                onClick={() => {
                  disconnect();
                  toast.warning("Wallet disconnected.");
                  setShowModel(false);
                }}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
