import UltraIcon from "@/assets/image/Icons/ultraIcon.svg";

export const bigPoolData = [
  {
    name: "LUSD",
    type: "Convex",
    tvl: "$2.67m",
    unboostedApr: "9.86%",
    boostedApr: "19.72%",
    deposits: "0.00",
    earned: "0.00",
    icon: UltraIcon,
    poolAddress: "0xA16F491D784433B5B8206F16A61ED15883C6729E",
  },
  {
    name: "ULTRA",
    type: "Convex",
    tvl: "$479.36k",
    unboostedApr: "19.62%",
    boostedApr: "202.09%",
    deposits: "0.00",
    earned: "0.00",
    icon: UltraIcon,
    poolAddress: "0xA16F491D784433B5B8206F16A61ED15883C6729E",
  },
];

export interface bigPoolDataType {
  name: string;
  type: string;
  tvl: string;
  unboostedApr: string;
  boostedApr: string;
  deposits: string;
  earned: string;
  icon: any;
  poolAddress: string;
}
