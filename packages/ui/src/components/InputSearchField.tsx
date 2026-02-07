import React from "react";
import Search24pxGray300Icon from "../assets/images/svg/search_24px_gray_300.svg";

type InputSearchFieldProps = React.InputHTMLAttributes<HTMLInputElement>;

export const InputSearchField = ({ ...props }: InputSearchFieldProps) => {
  return (
    <div className="w-full h-auto flex items-center justify-start rounded-lg border-2 border-gray-300 focus:border-blue-500 focus-within:border-blue-500 px-4 overflow-hidden gap-2 min-h-9 max-h-9">
      <img
        src={Search24pxGray300Icon}
        alt="Search icon"
        className="w-6 h-6 object-contain object-center"
      />

      <input
        type="search"
        className="w-full h-auto py-2 text-[12px] outline-none leading-4 text-gray-500"
        {...props}
      />
    </div>
  );
};
