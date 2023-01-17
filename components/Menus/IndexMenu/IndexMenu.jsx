import MenuItem from "../MenuItem/MenuItem";
import { MenuContainer } from "./styles";

const IndexMenu = ({ categories }) => {
  return (
    <MenuContainer>
      {categories.length > 0 &&
        categories.map((category) => {
          return (
            <MenuItem
              key={category.id}
              url={category.url}
              itemSubtitle={category.subtitle}
              itemTitle={category.title}
            />
          );
        })}
    </MenuContainer>
  );
};

export default IndexMenu;
