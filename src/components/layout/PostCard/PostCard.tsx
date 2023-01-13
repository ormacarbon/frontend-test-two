import { LinkButton } from "@/components/form";
import { Post } from "@/types";
import Link from "next/link";
import React from "react";
import { Heading } from "../../typography";
import { CategoryTag } from "../CategoryTag/CategoryTag";
import * as S from "./post-card.style";

interface PostCardProps {
  post: Post;
  variant?: "no-background" | "with-background";
}
export const PostCard = ({
  post: { body, id, tags, title },
  variant,
}: PostCardProps) => {
  return (
    <S.PostCardContainer variant={variant}>
      <S.ContentContainer>
        <div>
          <Link
            href={`/posts/${id}`}
            style={{ all: "unset", cursor: "pointer" }}
          >
            <Heading variant="xl">{title}</Heading>
          </Link>
          <S.CategoriesContainer>
            {tags.map((category) => (
              <CategoryTag href={category} key={category} tagName={category} />
            ))}
          </S.CategoriesContainer>
        </div>

        <S.Content>{body}</S.Content>
      </S.ContentContainer>

      <LinkButton href={`/posts/${id}`}>Read more</LinkButton>
    </S.PostCardContainer>
  );
};
