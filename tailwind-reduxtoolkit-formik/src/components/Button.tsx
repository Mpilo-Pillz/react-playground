import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Variant =
  | "elementary"
  | "primary"
  | "secondary"
  | "tertiary"
  | "outline"
  | "link";

interface ButtonProps {
  variant?: Variant;
  children: React.ReactNode;
}

const Button: React.FC<
  DetailedHTMLProps<
    ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ variant = "primary", children, disabled, ...rest }) => {
  const effectiveVariant = disabled ? "tertiary" : variant || "primary";

  const buttonStyles: { [key in Variant]: string } = {
    elementary: "bg-elementary text-white",
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    tertiary: "bg-tertiary text-primary",
    link: "text-primary hover:underline",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <button
      className={`inline-block rounded-lg px-5 py-3 text-sm font-medium ${buttonStyles[effectiveVariant]}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
