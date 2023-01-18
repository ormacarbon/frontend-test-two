import styled from "styled-components";

export const HeaderStyle = styled.div`
  background: #52796f;
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Hr = styled.hr`
  border: 1px solid;
  margin-top: 0;
  margin-bottom: 16px;
`;

export const LayoutButtoms = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  transition: color 0.2s ease-in;
  &:hover {
    color: #f2f2f2;
  }
`;
