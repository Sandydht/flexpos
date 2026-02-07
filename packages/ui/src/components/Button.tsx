type Variant = "primary" | "secondary" | "danger" | "disabled" | "loading";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  label: string;
};

export const Button = ({
  variant = "primary",
  label,
  disabled = false,
  ...props
}: ButtonProps) => {
  if (variant === "secondary") {
    return (
      <button
        {...props}
        className={`w-full h-auto min-h-[36px] max-h-[36px] px-4 py-2 rounded-lg text-center text-[14px] leading-[20px] font-semibold ${disabled ? "text-[#95A5A6] bg-[#D5D8DC] border border-[#D5D8DC] cursor-not-allowed" : "text-[#2C3E50] bg-[#F5F7FA] border border-[#D5D8DC] hover:bg-[#EAECEE] cursor-pointer"}`}
        disabled={disabled}
      >
        {label}
      </button>
    );
  } else if (variant === "danger") {
    return (
      <button
        {...props}
        className={`w-full h-auto min-h-[36px] max-h-[36px] px-4 py-2 rounded-lg text-center text-[14px] leading-[20px] font-semibold ${disabled ? "text-[#95A5A6] bg-[#D5D8DC] border border-[#D5D8DC] cursor-not-allowed" : "text-[#FFFFFF] bg-[#E74C3C] hover:bg-[#CB4335] cursor-pointer"}`}
        disabled={disabled}
      >
        {label}
      </button>
    );
  } else if (variant === "disabled") {
    return (
      <button
        {...props}
        className="w-full h-auto min-h-[36px] max-h-[36px] cursor-not-allowed px-4 py-2 rounded-lg text-center text-[14px] leading-[20px] font-semibold text-[#95A5A6] bg-[#D5D8DC] border border-[#D5D8DC]"
        disabled
      >
        {label}
      </button>
    );
  } else if (variant === "loading") {
    return (
      <button
        {...props}
        className="w-full h-auto min-h-[36px] max-h-[36px] cursor-not-allowed px-4 py-2 rounded-lg text-center text-[14px] leading-[20px] font-semibold text-[#95A5A6] bg-[#D5D8DC] border border-[#D5D8DC]"
        disabled
      >
        Loading...
      </button>
    );
  } else {
    return (
      <button
        {...props}
        className={`w-full h-auto min-h-[36px] max-h-[36px] px-4 py-2 rounded-lg text-center text-[14px] leading-[20px] font-semibold ${disabled ? "text-[#95A5A6] bg-[#D5D8DC] border border-[#D5D8DC] cursor-not-allowed" : "text-[#FFFFFF] bg-[#3498DB] hover:bg-[#2E86C1] cursor-pointer"}`}
        disabled={disabled}
      >
        {label}
      </button>
    );
  }
};
