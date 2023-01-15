import styled, { css } from 'styled-components';
import Link from 'next/link';

export const Card = styled.div`
  ${({ theme, type }) => theme.title === 'light' ?
    css`
    background-color: ${theme.pokemonTypes[type]}`
    :
    css`
    background-color: #686a6587`
  };
  /* background: ${({ theme, type }) => theme.pokemonTypes[type]}; */
  width: 150px;
  height: 200px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  position: relative;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

export const Imagem = styled.img`
  width: 300;
  height: 300;
`;

export const LinkButton = styled(Link)`
  text-decoration: none;
`;

export const Title = styled.h2`
  text-transform: capitalize;
  font-family: 'Johto Mono';
  color: ${({ theme }) => theme.colors.textColor};
  border-radius: 1rem;
  width: 9rem;
  display: flex;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.textCardBackground};

  &:hover {
    /* font-weight: 500; */
    scale: 1;
  }
`;

export const Id = styled.span`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  width: 1.3rem;
  height: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
  border-radius: 50%;
`;