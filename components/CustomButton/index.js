import React from "react";
import { Button } from "./styles";

function CustomButton({ children, action, disabled, theme, size }) {
  return (
    <Button disabled={disabled} theme={theme} size={size} onClick={action}>
      {children}
    </Button>
  );
}

export default CustomButton;
