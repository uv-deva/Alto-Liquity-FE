import { CUSTOM_CHAIN_CONFIG, IS_PRODUCTION } from "@/utils";
import { Transport } from "viem";
import { createConfig, http } from "wagmi";
import { Chain } from "wagmi/chains";
import { walletConnect } from "wagmi/connectors";

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;

if (!projectId) {
  throw new Error("Please Project Id for wallet connect!");
}

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

let chains: [Chain, ...Chain[]];
let transports: { [key: string]: Transport };

const depo: Chain = {
  id: CUSTOM_CHAIN_CONFIG.depo.chainId,
  name: CUSTOM_CHAIN_CONFIG.depo.name,
  nativeCurrency: {
    decimals: 18,
    name: CUSTOM_CHAIN_CONFIG.depo.currency.name,
    symbol: CUSTOM_CHAIN_CONFIG.depo.currency.symbol,
  },
  rpcUrls: {
    default: { http: [CUSTOM_CHAIN_CONFIG.depo.rpcUrl] },
  },
  blockExplorers: {
    default: { name: "DepoTrace", url: CUSTOM_CHAIN_CONFIG.depo.blockExplorer },
  },
  testnet: true,
};

const sepolia: Chain = {
  id: CUSTOM_CHAIN_CONFIG.sepolia.chainId,
  name: CUSTOM_CHAIN_CONFIG.sepolia.name,
  nativeCurrency: {
    decimals: 18,
    name: CUSTOM_CHAIN_CONFIG.sepolia.currency.name,
    symbol: CUSTOM_CHAIN_CONFIG.sepolia.currency.symbol,
  },
  rpcUrls: {
    default: { http: [CUSTOM_CHAIN_CONFIG.sepolia.rpcUrl] },
  },
  blockExplorers: {
    default: { name: "sepolia", url: CUSTOM_CHAIN_CONFIG.sepolia.blockExplorer },
  },
  testnet: true,
};

if (IS_PRODUCTION) {
  chains = [sepolia];
  transports = {
    [sepolia.id]: http(),
  };
} else {
  chains = [sepolia];
  transports = {
    [sepolia.id]: http(),
  };
}

// Create wagmiConfig
export const config = createConfig({
  chains,
  transports,
  connectors: [walletConnect({ projectId, metadata, showQrModal: false })],
  ssr: true,
});
