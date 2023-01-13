import Link from "next/link";
import { ComponentProps } from "react";
import * as S from "./category-tag.style";

interface PostCardProps {
  tagName: string;
  href: string;
}

export const CategoryTag = ({ tagName, href }: PostCardProps) => {
  return (
    <S.TagContainer href={`/category/${href}`}>
      <S.TagName>{tagName}</S.TagName>
    </S.TagContainer>
  );
};
