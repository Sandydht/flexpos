import React from "react";

type Variant = "primary" | "secondary" | "danger";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  label: string;
  loading?: boolean;
};

const baseStyle =
  "w-full min-h-[36px] max-h-[36px] px-4 py-2 rounded-lg text-center text-[14px] leading-[20px] font-semibold transition";

const variants: Record<Variant, string> = {
  primary: "text-white bg-[#3498DB] hover:bg-[#2E86C1]",
  secondary:
    "text-[#2C3E50] bg-[#F5F7FA] border border-[#D5D8DC] hover:bg-[#EAECEE]",
  danger: "text-white bg-[#E74C3C] hover:bg-[#CB4335]",
};

const disabledStyle =
  "text-[#95A5A6] bg-[#D5D8DC] border border-[#D5D8DC] cursor-not-allowed";

export const Button = ({
  variant = "primary",
  label,
  disabled,
  loading,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <button
      {...props}
      disabled={isDisabled}
      className={`${baseStyle} ${isDisabled ? disabledStyle : variants[variant]}`}
    >
      {loading ? "Loading..." : label}
    </button>
  );
};
