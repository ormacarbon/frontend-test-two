import React from "react";
import { Heading } from "../../typography";
import * as S from "./post-card.style";

interface PostCardProps {
  title: string;
  content: string;
}

export const PostCard = ({ title, content }: PostCardProps) => {
  return (
    <S.PostCardContainer>
      <S.ContentContainer>
        <Heading variant="xl">{title}</Heading>
        <S.Content>{content}</S.Content>
      </S.ContentContainer>

      <button>see more</button>
    </S.PostCardContainer>
  );
};
