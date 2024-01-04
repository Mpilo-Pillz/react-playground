import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const Button: React.FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => {
  const { disabled } = props;
  return (
    <button disabled={disabled} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
