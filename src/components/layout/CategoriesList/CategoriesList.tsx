import { CategoryListSkeleton } from "@/components/feedback";
import { useListCategories } from "@/hooks/api/categories/useListCategories";
import { removeDuplicates } from "@/src/helpers/removeDuplicates";
import { CategoryTag } from "../CategoryTag/CategoryTag";
import * as S from "./categories-list";

export const CategoriesList = () => {
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
    <S.CategoryListContainer>
      {isLoading ? (
        <>
          <CategoryListSkeleton />
        </>
      ) : (
        categoriesList?.map((category) => (
          <CategoryTag href={category} key={category} tagName={category} />
        ))
      )}
    </S.CategoryListContainer>
  );
};
