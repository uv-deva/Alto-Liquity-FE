"use client";

import SelectVaultForm from "@/design-systems/Molecules/SelectVaultForm";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { SelectVaultsTempProps } from "./interface";
import { useRouter } from "next/navigation";

const SelectVaultTemplate: React.FC<SelectVaultsTempProps> = ({ address }) => {
  const router = useRouter();

  return (
    <div className="mt-4">
      <Link
        href="#"
        className="flex gap-1 items-center justify-start container mx-auto text-primary"
        onClick={() => router.back()}
      >
        <ArrowLeftIcon className="h-[16px] w-[16px]" />
        <div className="text-body font-medium text-left">
          Go back to Collateral Selection
        </div>
      </Link>
      <div>
        <div className="w-full flex justify-center mt-4">
          <SelectVaultForm urlAddress={address} />
        </div>
      </div>
    </div>
  );
};
export default SelectVaultTemplate;
