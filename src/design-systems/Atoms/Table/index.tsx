import React, { useState, useEffect } from "react";
import Button from "@/design-systems/Atoms/Button";
import Image from "next/image";
import EarnIcon from "@/assets/image/Icons/earnedIcon.svg";
import { PoolData, TableProps } from "./interface";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Typography from "../Typography";

const Table: React.FC<TableProps> = ({
  columns,
  data,
  isPagination = false,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;

  const router = useRouter();
  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate displayed items
  const displayedItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle pagination click
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="w-full overflow-x-auto">
        <table className="md:w-full w-[1024px] text-left">
          <thead>
            <tr className="border-b border-separator text-sm font-normal">
              {columns.map((column, index) => (
                <th className="p-4" key={index}>
                  {column?.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayedItems.map((pool: PoolData) => (
              <tr key={pool.name} className="font-normal group">
                <td className="p-4 bg-transparent text-white border-b border-separator group-hover:bg-[#ffffff20]">
                  <div className="flex gap-2 h-full items-center">
                    <Image
                      src={pool.icon}
                      alt={pool.name}
                      className="w-6 h-6"
                    />
                    {pool.name}
                  </div>
                </td>
                <td className="p-4 bg-transparent text-white border-b border-separator group-hover:bg-[#ffffff20]">
                  {pool.tvl}
                </td>
                <td className="p-4 bg-transparent text-white border-b border-separator group-hover:bg-[#ffffff20]">
                  {pool.unboostedApr}
                </td>
                <td className="p-4 bg-transparent text-white border-b border-separator group-hover:bg-[#ffffff20]">
                  {pool.boostedApr}
                </td>
                <td className="p-4 bg-transparent text-white border-b border-separator group-hover:bg-[#ffffff20]">
                  {pool.deposits}
                </td>
                <td className="p-4 bg-transparent text-white border-b border-separator group-hover:bg-[#ffffff20]">
                  <div className="flex gap-2 h-full items-center">
                    <Image src={EarnIcon} alt={pool.name} className="w-6 h-6" />
                    {pool.earned}
                  </div>
                </td>
                <td className="p-4 bg-transparent text-white border-b border-separator group-hover:bg-[#ffffff20]">
                  <Button className="bg-primary text-body !text-black py-2 px-4">
                    <Link href={`/earn-manage?address=${pool.poolAddress}`}>
                      Manage
                    </Link>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isPagination && (
        <div className="flex justify-between items-center pt-4">
          <Button
            className={`bg-primary text-body !text-black py-2 px-4 rounded cursor-pointer ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>

          <Typography className="">
            Page {currentPage} of {totalPages}
          </Typography>

          <Button
            className={`bg-primary text-body !text-black py-2 px-4 rounded cursor-pointer ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </>
  );
};

export default Table;
