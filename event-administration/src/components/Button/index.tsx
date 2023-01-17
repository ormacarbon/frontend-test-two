import { ButtonHTMLAttributes, ReactNode } from "react";

import { Button } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonComponent = ({ children, ...rest }: ButtonProps) => {
  return (
    <Button type="button" {...rest}>
      {children}
    </Button>
  );
};
