import { LinkButton } from "@/components/form";
import { Post } from "@/types";
import React from "react";
import { Heading } from "../../typography";
import { CategoryTag } from "../CategoryTag/CategoryTag";
import * as S from "./post-card.style";

export const PostCard = ({ title, body, tags, id }: Post) => {
  return (
    <S.PostCardContainer>
      <S.ContentContainer>
        <div>
          <Heading variant="xl">{title}</Heading>
          <S.CategoriesContainer>
            {tags.map((category) => (
              <CategoryTag key={category} tagName={category} />
            ))}
          </S.CategoriesContainer>
        </div>

        <S.Content>{body}</S.Content>
      </S.ContentContainer>

      <LinkButton href={`/posts/${id}`}>Read more</LinkButton>
    </S.PostCardContainer>
  );
};
