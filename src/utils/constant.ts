export const parseBoolean = (value?: string) => {
  return value && value.toLowerCase() === "true";
};
export const IS_PRODUCTION = parseBoolean(
  process.env.NEXT_PUBLIC_IS_PRODUCTION,
);

export const SUPPORTED_CHAIN_ID = IS_PRODUCTION ? 11155111 : 11155111;

export const CUSTOM_CHAIN_CONFIG = {
  depo: {
    name: "Depo",
    chainId: 51181,
    network: "depotest1-cekn9bdkjj",
    currency: {
      name: "TDEPO",
      symbol: "TDepo",
    },
    rpcUrl: "https://test1rpc.depo.network/",
    blockExplorer: "https://test1exp.depo.network/",
  },
  sepolia: {
    name: "Sepolia",
    chainId: 11155111,
    network: "sepolia",
    currency: {
      name: "Sepolia",
      symbol: "ETH",
    },
    rpcUrl: "https://eth-sepolia.g.alchemy.com/v2/lVSIFTD3PJUIbEz36C4wS1YLIZVe06-U",
    blockExplorer: "https://sepolia.etherscan.io/",
  },
};
