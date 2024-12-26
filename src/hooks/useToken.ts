import { AddressString } from "@/interfaces";
import { ethers } from "ethers";
import { Abi } from "viem";
import { useReadContracts } from "wagmi";

type ContractReadData = {
  decimals: number;
  name: string;
  symbol: string;
  totalSupply: string;
  balance: string;
  refetch: () => void;
};

export const useToken = ({
  address,
  tokenAddress,
  abi,
}: {
  address: AddressString;
  tokenAddress: AddressString;
  abi: Abi;
}) => {
  const result = useReadContracts({
    allowFailure: false,
    contracts: [
      {
        address: tokenAddress,
        abi,
        functionName: "decimals",
      },
      {
        address: tokenAddress,
        abi,
        functionName: "name",
      },
      {
        address: tokenAddress,
        abi,
        functionName: "symbol",
      },
      {
        address: tokenAddress,
        abi,
        functionName: "totalSupply",
      },
      {
        address: tokenAddress,
        abi,
        functionName: "balanceOf",
        args: [address],
      },
    ],
  });
  const [decimals, name, symbol, totalSupply, balance] = result.data ?? [];

  return {
    decimals,
    name,
    symbol,
    totalSupply,
    balance: ethers.utils.formatUnits(balance?.toString() ?? "0", "ether"),
    refetch: result.refetch,
  } as ContractReadData;
};
