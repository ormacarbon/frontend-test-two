import { LinkButton, ThemeSwitch } from "@/components/form";
import { useListCategories } from "@/hooks/api/categories/useListCategories";
import { removeDuplicates } from "@/src/helpers";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { AiOutlineMenu } from "react-icons/ai";
import { CategoryListContainer } from "../CategoriesList/categories-list";
import { CategoryTag } from "../CategoryTag/CategoryTag";
import * as S from "./mobile-menu.style";

export const MobileMenu = () => {
  const { categoriesList: data, isLoading } = useListCategories({
    reqConfig: {
      params: {
        limit: 5,
      },
    },
  });

  const categories = data?.posts?.map((post) => post.tags)?.flat();

  const categoriesList = removeDuplicates(categories);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <S.Trigger className="IconButton" aria-label="Customise options">
          <AiOutlineMenu size={"1.5rem"} />
        </S.Trigger>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <S.Content sideOffset={-46}>
          <S.MenuTop>
            <S.Item>
              <ThemeSwitch />
            </S.Item>
          </S.MenuTop>

          <S.Separator />

          <S.Item>
            <LinkButton href="/">Latest articles</LinkButton>
          </S.Item>

          <CategoryListContainer>
            {categoriesList?.map((category) => (
              <S.Item key={category}>
                <CategoryTag href={category} tagName={category} />
              </S.Item>
            ))}
          </CategoryListContainer>
        </S.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
