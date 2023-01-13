import { Post } from "../types/Post";
import { removeDuplicates } from "./removeDuplicates";

interface filterPostsByCategory {
  postsList: Post[];
  categoryId: string;
}
export function filterPostsByCategory({
  categoryId,
  postsList,
}: filterPostsByCategory) {
  const categories = postsList?.map((post) => post.tags)?.flat();
  const categoriesList = removeDuplicates(categories);

  const category = categoriesList?.find((category) => category === categoryId);

  const postsByCategory = postsList?.filter((post) => {
    if (post.tags.find((tag) => tag === categoryId)) {
      return post;
    }
  });

  return { postsByCategory };
}
