import SelectVaultTemplate from "@/design-systems/Templates/SelectVaultTemplate";
import { SelectVaultPageProps } from "./interface";
import {
  vaultsCardPrismaData,
  vaultsCardPrismaLRTData,
} from "@/design-systems/Templates/HomePageTemplate/utils";

const SelectVaultPage: React.FC<SelectVaultPageProps> = ({ params }) => {
  return (
    <>
      <SelectVaultTemplate address={params.Address} />
    </>
  );
};

export async function generateStaticParams() {
  const addresses = [...vaultsCardPrismaLRTData, ...vaultsCardPrismaData];

  return addresses.map((address) => ({
    Address: address.address,
  }));
}

export default SelectVaultPage;
