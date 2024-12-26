import { ReactNode } from "react";
import { create } from "zustand";

type BaseConnectArgs = {
  open: boolean;
  data?: ReactNode;
};

type WalletConnectArgs = {
  modalType: "WalletConnect";
};

type TransactionConfirmationArgs = {
  modalType: "TransactionConfirmation";
  type: "success" | "error";
};

type SetOpenArgs =
  | { open: false; modalType?: "WalletConnect"; data?: null }
  | (BaseConnectArgs & (WalletConnectArgs | TransactionConfirmationArgs));

type ModalInterface = SetOpenArgs & {
  setOpen: (args: SetOpenArgs) => void;
};

export const useModal = create<ModalInterface>()((set) => ({
  open: false,
  modalType: "WalletConnect",
  data: null,
  setOpen: (args: SetOpenArgs) =>
    set(() => {
      switch (args.modalType) {
        case "TransactionConfirmation":
          return {
            open: args.open,
            data: args.data ?? null,
            modalType: args.modalType,
            type: args.type,
          };

        default:
          return {
            open: args.open,
            data: args.data ?? null,
            modalType: args.modalType,
          };
      }
    }),
}));
