import Button from "@/design-systems/Atoms/Button";
import React from "react";
import { TransactionCompleteConfirmationModalProps } from "./interface";
import { useModal } from "@/hooks/useModal";

const TransactionCompleteConfirmationModal: React.FC<
  TransactionCompleteConfirmationModalProps
> = ({ setShow, show }) => {
  const modal = useModal();

  return (
    <div
      className={`h-screen w-screen z-50 fixed top-0 bg-black6 justify-center items-center bg-no-repeat bg-center bg-cover ${
        show ? "flex" : "hidden"
      }`}
    >
      <div className="bg-[#1A202C] z-50 rounded-md text-left min-h-[440px] max-w-[800px] w-full flex">
        <div className="p-2 w-full flex justify-center items-center flex-col gap-4">
          <div>
            <div
              className={`size-20 stroke-[20px] ${
                modal.modalType === "TransactionConfirmation" &&
                modal.type === "success"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {modal.modalType === "TransactionConfirmation" &&
              modal.type === "success" ? (
                <svg
                  fill="currentColor"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <g>
                        <path
                          d="M437.016,74.984c-99.979-99.979-262.075-99.979-362.033,0.002c-99.978,99.978-99.978,262.073,0.004,362.031
				c99.954,99.978,262.05,99.978,362.029-0.002C536.995,337.059,536.995,174.964,437.016,74.984z M406.848,406.844
				c-83.318,83.318-218.396,83.318-301.691,0.004c-83.318-83.299-83.318-218.377-0.002-301.693
				c83.297-83.317,218.375-83.317,301.691,0S490.162,323.549,406.848,406.844z"
                        />
                        <path
                          d="M368.911,155.586L234.663,289.834l-70.248-70.248c-8.331-8.331-21.839-8.331-30.17,0s-8.331,21.839,0,30.17
				l85.333,85.333c8.331,8.331,21.839,8.331,30.17,0l149.333-149.333c8.331-8.331,8.331-21.839,0-30.17
				S377.242,147.255,368.911,155.586z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              ) : (
                <svg
                  fill="currentColor"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fillRule="evenodd">
                    <path d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7z" />
                    <path
                      d="M13 7A6 6 0 1 0 1 7a6 6 0 0 0 12 0z"
                      fill="#1A202C"
                    />
                    <path d="M7 5.969L5.599 4.568a.29.29 0 0 0-.413.004l-.614.614a.294.294 0 0 0-.004.413L5.968 7l-1.4 1.401a.29.29 0 0 0 .004.413l.614.614c.113.114.3.117.413.004L7 8.032l1.401 1.4a.29.29 0 0 0 .413-.004l.614-.614a.294.294 0 0 0 .004-.413L8.032 7l1.4-1.401a.29.29 0 0 0-.004-.413l-.614-.614a.294.294 0 0 0-.413-.004L7 5.968z" />
                  </g>
                </svg>
              )}
            </div>
          </div>
          <div className="space-y-2 text-center">
            <h2 className="text-subtitle font-bold tracking-tight">
              {modal.modalType === "TransactionConfirmation" &&
              modal.type === "success"
                ? "Successfully Completed Transaction"
                : "Transaction Failed"}
            </h2>
            <div className="text-gray-500">{modal.data}</div>
          </div>
          <div className="flex gap-6 mt-10">
            <Button
              className="py-[6px] px-[20px] border border-primary"
              onClick={() => setShow(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionCompleteConfirmationModal;
