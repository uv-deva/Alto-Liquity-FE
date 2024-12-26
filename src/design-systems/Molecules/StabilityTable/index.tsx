import Table from "@/design-systems/Atoms/Table";
import Typography from "@/design-systems/Atoms/Typography";
import {
  columnData,
  poolData,
} from "@/design-systems/Templates/EarnPageTemplate/utils";

const StabilityTable: React.FC = () => {
  return (
    <div className='w-full shadow-lg rounded-[12px] bg-[#1A202C] border border-separator'>
      <div className='p-6 w-full'>
        <Typography className='mb-4 text-lg text-left font-semibold'>Stability Pool</Typography>
        <Table data={poolData} columns={columnData} />
      </div>
    </div>
  );
};
export default StabilityTable;
