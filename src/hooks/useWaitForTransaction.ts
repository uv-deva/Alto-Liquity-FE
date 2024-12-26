import { config } from "@/utils/config";
import { useState } from "react";
import { useAccount } from "wagmi";
import { waitForTransactionReceipt } from "wagmi/actions";

export const useWaitForTransaction = () => {
  const { chainId: activeChain } = useAccount();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const waitForTransaction = async (hash: `0x${string}`, chainId?: number) => {
    console.log("chainId", chainId);
    setIsLoading(true);
    await waitForTransactionReceipt(config, {
      hash,
      chainId: chainId ?? activeChain,
    });
    setIsLoading(false);
  };
  return { isLoading, waitForTransaction };
};
