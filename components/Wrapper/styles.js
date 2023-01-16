import styled from "styled-components";

export const DarkWrapper = styled.div`
  background: ${({ darkMode }) => (darkMode ? "#393E46" : "#ece8dd")};
  color: ${({ darkMode }) => (darkMode ? "#ece8dd" : "#393E46")};
    transition: all 0.5s ease;
`;
