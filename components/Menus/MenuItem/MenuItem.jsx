import {
  MenuItemContainer,
  MenuItemDecoration,
  MenuItemTitleContainer,
  MenuItemSubtitle,
  MenuItemTitle,
} from "./styles";
import Image from "next/image";
import Link from "next/link";
import { GlobalContext } from "../../../storage/global";
import { useContext } from "react";

const MenuItem = ({ url, itemSubtitle, itemTitle }) => {
  const globalContext = useContext(GlobalContext);

  return (
    <MenuItemContainer className="animated">
      <MenuItemDecoration>
        <Image
          src="/illustrations/corner-decorator-left.png"
          alt="zeldapi logo"
          width={20}
          height={40}
        />
      </MenuItemDecoration>
      <Link href={url} className="link">
        <MenuItemTitleContainer>
          <MenuItemSubtitle
            className={
              globalContext.lightTheme
                ? "lightThemeFontColor"
                : "darkThemeFontColor"
            }
          >
            {itemSubtitle}
          </MenuItemSubtitle>
          <MenuItemTitle
            className={
              globalContext.lightTheme
                ? "lightThemeFontColor"
                : "darkThemeFontColor"
            }
          >
            {itemTitle}
          </MenuItemTitle>
        </MenuItemTitleContainer>
      </Link>
      <MenuItemDecoration>
        <Image
          src="/illustrations/corner-decorator-right.png"
          alt="zeldapi logo"
          width={20}
          height={40}
        />
      </MenuItemDecoration>
    </MenuItemContainer>
  );
};

export default MenuItem;
