export type VaultType =
  | "ETH"
  | "rETH"
  | "cbETH"
  | "sfrxETH"
  | "ETHx"
  | "weETH"
  | "ezETH"
  | "rsETH"
  | "TEstToken";

export interface VaultsCardProps {
  type?: VaultType;
  className?: string;
  name?: string;
  description?: string;
  icon: string;
  cardType: string;
  prismLRTDesc?: string;
  address?: string;
}
