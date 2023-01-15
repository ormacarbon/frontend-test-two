import styled, { keyframes } from "styled-components";

const fade = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const FadeTransition = styled.div`
  animation: ${fade} 0.5s ease;
`;
