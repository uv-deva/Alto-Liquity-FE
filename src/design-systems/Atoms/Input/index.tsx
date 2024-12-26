import React from "react";

import Typography from "../Typography";

import { getPlaceholderStyles } from "./utils";
import { InputProps } from "./interface";

const Input: React.FC<InputProps> = ({
  className,
  onChange,
  label,
  type,
  value,
  placeholder,
  variant = "primary",
  name,
  error,
  min,
  inWrpClassName,
  inputClassNames,
  inputStyle,
  onBlur,
  onFocus,
  errorClassName,
  inputDirectWrp,
  ...props
}) => {
  const labelClass = [
    `text-left font-Urbanist text-lg  font-bold leading-[145%] text-neutral-100 dark:text-neutral-800  pb-[16px] smd:pb-2`,
  ].join(" ");

  const inputClassNamesLocal = [
    "w-full border-none bg-transparent p-[24px] text-base  smd:text-lg  font-medium text-neutral-200 smd:placeholder:text-lg placeholder-text-[#002237] dark:text-neutral-500  dark:placeholder-text-neutral-500 outline-none  placeholder:font-medium  placeholder:leading-[148%] placeholder:text-neutral-500 placeholder:text-lg",
    getPlaceholderStyles(variant),
    inputClassNames,
  ].join(" ");

  return (
    <div className={`relative w-full font-Urbanist h-full ${className}`}>
      {label && <Typography className={labelClass}>{label}</Typography>}
      <div
        className={`w-full rounded-sm p-0 focus:outline-none dark:bg-transparent  h-full ${inWrpClassName}`}
      >
        <div
          className={`relative w-full cursor-pointer overflow-hidden rounded-sm h-full ${inputDirectWrp}`}
        >
          <input
            className={`${inputStyle} ${inputClassNamesLocal}`}
            min={min}
            name={name}
            placeholder={placeholder}
            type={type}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            onClick={(e) => e.stopPropagation()}
            onFocus={(e) => {
              e.stopPropagation();
              onFocus?.();
            }}
            {...props}
          />
        </div>
      </div>
      <p className={`text-error-800 ${errorClassName || ""}`}>{error}</p>
    </div>
  );
};

export default Input;
