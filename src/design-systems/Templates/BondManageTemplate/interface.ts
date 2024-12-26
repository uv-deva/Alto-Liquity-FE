import { bigPoolDataType } from "../PooltableTemplate/utils";

export interface UserAddressType {
  tokenAdd: string;
  poolAdd: string;
}

export interface DepositProps {
  data: bigPoolDataType | undefined;
  activeTab?: number;
}
