import { ComponentProps } from "react";
import * as S from "./category-tag.style";

interface PostCardProps {
  tagName: string;
}

export const CategoryTag = ({ tagName }: PostCardProps) => {
  return (
    <S.TagContainer>
      <S.TagName>{tagName}</S.TagName>
    </S.TagContainer>
  );
};
