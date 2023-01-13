import { ComponentProps } from "react";
import styled, { css, DefaultTheme } from "styled-components";

const variantStyles = (
  theme: DefaultTheme,
  variant: "no-background" | "with-background" = "no-background"
) =>
  ({
    "with-background": css`
      background-color: ${theme.colors.background2};
      padding: 1rem;
    `,
    "no-background": css`
      background-color: none;
    `,
  }[variant]);

export const PostCardContainer = styled.div<{
  variant?: "no-background" | "with-background";
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  border-radius: ${({ theme }) => theme.radii.md};
  ${({ theme, variant }) => variantStyles(theme, variant)};
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Content = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

export const CategoriesContainer = styled.span`
  margin-top: 0.25rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
