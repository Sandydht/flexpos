import React from "react";
import Search24pxGray300Icon from "../assets/images/svg/search_24px_gray_300.svg";

type InputSearchFieldProps = React.InputHTMLAttributes<HTMLInputElement>;

export const InputSearchField = ({
  disabled,
  ...props
}: InputSearchFieldProps) => {
  return (
    <div
      className={`
      w-full h-auto flex items-center justify-start rounded-lg border-2 px-4 overflow-hidden gap-2
      ${disabled ? "bg-gray-100 border-gray-200 cursor-not-allowed" : "border-gray-300 focus:border-blue-500 focus-within:border-blue-500"}
    `}
    >
      <img
        src={Search24pxGray300Icon}
        alt="Search icon"
        className="w-6 h-6 object-contain object-center"
      />

      <input
        type="search"
        className={`
          w-full h-auto py-2 text-[12px] outline-none leading-4 min-h-9 max-h-9
          ${disabled ? "bg-transparent text-gray-400 cursor-not-allowed" : "text-gray-500"}  
        `}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};
