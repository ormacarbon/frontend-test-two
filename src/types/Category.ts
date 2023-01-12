import { DataPagination } from "./DataPagination";
import { Post } from "./Post";

export type Category = string;

export interface CategoryData extends DataPagination {
  posts: Post[];
}
