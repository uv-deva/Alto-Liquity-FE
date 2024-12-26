import React from "react";

import { ButtonProps } from "./interface";

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`cursor-pointer text-body rounded-tl-sm rounded-br-sm text-white disabled:bg-white disabled:text-lightBlack disabled:opacity-30 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
