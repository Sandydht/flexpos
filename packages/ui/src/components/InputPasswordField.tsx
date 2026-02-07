import React, { useState } from "react";
import Visibility24pxGray300Icon from "../assets/images/svg/visibility_24px_gray_300.svg";
import VisibilityOff24pxGray300Icon from "../assets/images/svg/visibility_off_24px_gray_300.svg";

type InputPasswordFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  required?: boolean;
};

export const InputPasswordField = ({
  id,
  label,
  error,
  required,
  disabled,
  ...props
}: InputPasswordFieldProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="w-full h-auto flex flex-col items-start justify-start gap-2">
      <label
        htmlFor={id}
        className="text-left text-[14px] font-semibold leading-5"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="w-full h-auto flex flex-col gap-0.5">
        <div
          className={`
            w-full flex items-center justify-between rounded-lg border-2 px-4 overflow-hidden
            ${
              disabled
                ? "bg-gray-100 border-gray-200 cursor-not-allowed"
                : error
                  ? "border-red-400 focus-within:border-red-500"
                  : isFocused
                    ? "border-blue-500 focus-within:border-blue-500"
                    : "border-gray-300"
            }
          `}
        >
          <input
            id={id}
            type={isVisible ? "text" : "password"}
            disabled={disabled}
            className={`
              w-full py-2 text-[12px] outline-none leading-4 min-h-9 max-h-9 text-gray-500
              ${
                disabled
                  ? "bg-transparent text-gray-400 cursor-not-allowed"
                  : "text-gray-500"
              }  
            `}
            onFocus={() => !disabled && setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />

          <button
            type="button"
            className={`
              min-w-6 min-h-6 flex items-center justify-center rounded
              ${disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer"}
            `}
            disabled={disabled}
            onClick={() => {
              if (!disabled) setIsVisible((prev) => !prev);
            }}
          >
            <img
              src={
                isVisible
                  ? Visibility24pxGray300Icon
                  : VisibilityOff24pxGray300Icon
              }
              alt="Toggle password visibility"
              className="w-6 h-6 object-contain"
            />
          </button>
        </div>

        {error && !disabled && (
          <p className="text-left text-[12px] text-red-500 leading-4">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};
