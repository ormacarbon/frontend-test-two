import { DataPagination } from "./DataPagination";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
}

export interface PostsData extends DataPagination {
  posts: Post[];
}
