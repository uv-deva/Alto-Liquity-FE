import React from "react";

import { ConnectModel } from "@/design-systems/Molecules/Model/ConnectModel";
import TransactionCompleteConfirmationModal from "@/design-systems/Molecules/Model/TransactionCompleteConfirmationModal";

import { useModal } from "@/hooks/useModal";

const ModalProvider: React.FC = () => {
  const { modalType, open, setOpen } = useModal();

  const handleClose = () =>
    setOpen({
      open: false,
    });

  return (
    <div>
      {modalType === "WalletConnect" && (
        <ConnectModel setShowModel={handleClose} showModel={open} />
      )}

      {modalType === "TransactionConfirmation" && (
        <TransactionCompleteConfirmationModal
          show={open}
          setShow={handleClose}
        />
      )}
    </div>
  );
};

export default ModalProvider;
