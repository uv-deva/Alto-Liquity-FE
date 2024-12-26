export interface ModalInterface {
  showModel: boolean;
  setShowModel: (newState: boolean) => void;
}

export interface TransactionCompleteConfirmationModalProps {
  show: boolean;
  setShow: (newState: boolean) => void;
}
