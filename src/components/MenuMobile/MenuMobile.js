import React from "react";
import * as C from "./style";

const MenuMobile = () => {
  return (
    <C.ContainerMenuMobile>
      <C.Burger>
        <div className="strip burger-strip">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </C.Burger>
    </C.ContainerMenuMobile>
  );
};

export default MenuMobile;
