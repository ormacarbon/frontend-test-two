import { Category } from "./Category";
import { DataPagination } from "./DataPagination";

export interface Post {
  id: number;
  title: string;
  body: string;
  tags: Category[];
}

export interface PostsData extends DataPagination {
  posts: Post[];
}
