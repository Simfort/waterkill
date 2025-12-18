import { ButtonHTMLAttributes } from "react";

export default function Button({
  className,
  children,

  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`w-full transition-all text-[13px] cursor-pointer hover:opacity-60 h-10.5 rounded-[20px] ${className}`}
      {...props}>
      {children}
    </button>
  );
}
