import styled, { css } from "styled-components";

export const Container = styled.li`
  ${({ isActive, theme }) => `
        padding-inline: 1rem;
        height: 2rem;   
        display: flex;
        align-items: center;
        
        border-radius: 7px;
        cursor: pointer;
        background: ${
          isActive ? theme.colors.green[500] : theme.colors.grey[500]
        }};
        transition: background 0.2s ease-in-out;

        &:hover {
            background: ${theme.colors.green[500]};
        }

    `}
`;
