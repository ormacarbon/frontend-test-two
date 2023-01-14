import styled, { css } from "styled-components";

const BadgeModifiers = {
  green: (theme) => css`
    background: ${theme.colors.green[500]};
  `,
  red: (theme) => css`
    background: ${theme.colors.red[500]};
  `,
  grey: (theme) => css`
    background: ${theme.colors.grey[500]};
  `,
};

export const Container = styled.div`
  padding: 0.5rem;
  border-radius: 3px;
  font-size: 0.9rem;

  ${({ color, theme }) =>
    BadgeModifiers[color](theme) ?? BadgeModifiers.grey(theme)}
`;
