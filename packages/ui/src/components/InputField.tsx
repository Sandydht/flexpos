import React from "react";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  required?: boolean;
};

const baseStyle =
  "w-full px-4 py-2 rounded-lg border-2 text-[12px] leading-4 text-gray-500 outline-none min-h-9 max-h-9 bg-white";
const disabledStyle =
  "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed";
const noErrorStyle =
  "border-gray-300 focus:border-blue-500 focus-within:border-blue-500";
const errorStyle =
  "border-red-500 focus:border-red-500 focus-within:border-red-500";

export const InputField = ({
  id,
  label,
  error,
  required,
  disabled,
  ...props
}: InputFieldProps) => {
  return (
    <div className="w-full h-auto flex flex-col items-start justify-start gap-1">
      <label
        htmlFor={id}
        className="text-left text-[14px] font-semibold leading-5 text-black"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="w-full h-auto flex flex-col items-start justify-start gap-0.5">
        <input
          id={id}
          className={`${baseStyle} ${disabled ? disabledStyle : ""} ${error ? errorStyle : noErrorStyle}`}
          disabled={disabled}
          {...props}
        />

        {error && !disabled && (
          <p className="text-left text-[12px] text-red-500 leading-4">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};
