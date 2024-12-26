import { dropdownOptions } from "@/design-systems/Atoms/MoreDropdown/utils";
import { RedeemPageProps } from "./interface";
import RedeemPageTemplate from "@/design-systems/Templates/RedeemTemplate";

const SelectVaultPage: React.FC<RedeemPageProps> = ({ params }) => {
  return (
    <>
      <RedeemPageTemplate urlAddress={params.Address} />
    </>
  );
};

// This function needs to be defined to generate static params
export async function generateStaticParams() {
  // Fetch or define a list of addresses
  const addresses = [
    "0x4591DBfF62656E7859Afe5e45f6f47D3669fBB28",
    "0x35282d87011f87508D457F08252Bc5bFa52E10A0",
  ]; // Replace with your data source

  return addresses.map((address) => ({
    Address: address,
  }));
}

export default SelectVaultPage;
