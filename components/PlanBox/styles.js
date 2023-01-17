import styled from "styled-components";

export const PlanContainer = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.container};
  box-shadow: ${(props) => props.theme.colors.shadowContainer};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PlanIconContainer = styled.div`
  margin: -3rem 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.textPrimary};
  text-align: center;
  margin-bottom: 1.25rem;
  padding-bottom: 0.8rem;
  border-bottom: 2px solid ${(props) => props.theme.colors.separator};
`;

export const Overview = styled.div`
  font-size: 1.25rem;
  line-height: 1.4;
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.theme.colors.textPrimary};
  & > span {
    font-size: 1.65rem;
    color: var(--blue);
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.textSecundary};
  & > span:last-child {
    align-self: flex-end;
  }
`;

export const Price = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: var(--blue);
`;

export const Paragraph = styled.p`
  font-size: 1.145rem;
  color: ${(props) => props.theme.colors.textSecundary};
  margin-bottom: 2rem;
  text-align: center;
`;

export const Button = styled.button`
  font-size: 1.25rem;
  color: var(--white);
  font-weight: bold;
  background-color: var(--blue);
  border: none;
  border-radius: 0.6rem;
  box-shadow: var(--shadow);
  padding: 0.6rem 2rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: var(--blue-100);
    box-shadow: var(--shadow-hover);
  }
`;
