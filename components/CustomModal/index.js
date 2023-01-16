import React from "react";
import { ModalWrapper } from "./styles";

function CustomModal({ children, isVisible }) {
  return (
    <>
      {isVisible && (
        <ModalWrapper>
          <div className="modal">{children}</div>
        </ModalWrapper>
      )}
    </>
  );
}

export default CustomModal;
