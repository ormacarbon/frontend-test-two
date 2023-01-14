import styled from "styled-components";
import { css } from "styled-components";

const variantStyles = (variant: "4xl" | "3xl" | "2xl" | "xl" = "xl") =>
  ({
    "4xl": css`
      font-size: ${({ theme }) => theme.fontSizes["4xl"]};
    `,
    "3xl": css`
      font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    `,
    "2xl": css`
      font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    `,
    xl: css`
      font-size: ${({ theme }) => theme.fontSizes["xl"]};
    `,
  }[variant]);

export const Heading = styled.h1<{
  variant: "4xl" | "3xl" | "2xl" | "xl";
}>`
  ${({ variant }) => variantStyles(variant)}
`;
