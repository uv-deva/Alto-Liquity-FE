import Typography from "@/design-systems/Atoms/Typography";
import Button from "@/design-systems/Atoms/Button";
import Link from "next/link";
import {
  BondTokenContractAdd} from "@/utils/Contract";

const BondTable: React.FC = () => {
  return (
    <div className='w-full shadow-lg rounded-[12px] bg-[#1A202C] border border-separator p-8'>
      <div className='p-6 w-full'>
        <Typography className='mb-4 text-lg text-left font-semibold'>LUSD Bonds</Typography>
        <Typography className='mb-4 text-lg text-left font-semibold'>You can bond LUSD to obtain Boosted LUSD (bLUSD), a yield-amplified version of LUSD.</Typography>
        <Button className="bg-primary text-body !text-black py-2 px-4 float-right">
          <Link href={`/bond-manage?address=${BondTokenContractAdd}`}>
            Manage
          </Link>
        </Button>
        {/* <Table data={poolData} columns={columnData} /> */}
      </div>
    </div>
  );
};
export default BondTable;
