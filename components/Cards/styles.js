import styled from "styled-components";

export const CardsView = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: #f1faee;
  width: 200px;
  margin-right: 2rem;
  margin-bottom: 2rem;
  border: 1px solid;
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
`;

export const Space = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.8rem;
`;

export const Buttons = styled.button`
  background-color: #52796f; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 1rem;
  width: 127px;
  &:hover {
    opacity: 80%;
  }
  cursor: pointer;
`;

export const DetailsButton = styled.button``;
