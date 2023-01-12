import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const CartContent = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 35%;
  background-color: ${({theme}) => theme.colors.gray800};
  padding: 3rem;
  padding-top: 4.5rem;
  box-shadow: -4px 8px 30px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;

  h2{
    font-weight: bold;
    font-size: ${({theme}) => theme.fontSize.lg};
    color: ${({theme}) => theme.colors.gray100};
    margin-bottom: 2rem;
  };

  > section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    overflow-y: auto;
    flex: 1;

    .texto{
      color: ${({theme}) => theme.colors.gray100};
    }
  }

  @media (max-width: 992px){
    width: 100%;
    padding: 2rem;
  }
`

export const CartClose = styled(Dialog.Close)`
  background: none;
  border: none;
  color: ${({theme}) => theme.colors.gray500};
  position: absolute;
  top: 1.75rem;
  right: 1.75rem;
`

export const CartProduct = styled.div`
  width: 100%;
  display: flex;
  gap: 1.25rem;
  align-items: center;
  min-height: 5.8125rem;
`

export const CartProductImage = styled.div`
  width: 6.3125rem;
  height: 5.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: linear-gradient(180deg, #1EA483 0%, #7465D4 100%);

  img {
    object-fit: contain;
    padding: 0.5rem;
  }
`

export const CartCProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: "space-between";

  p {
    color: ${({theme}) => theme.colors.gray300};
    font-size: ${({theme}) => theme.fontSize.md};
  };

  strong {
    color: ${(props) => props.theme.colors.white};
    margin-top: 4px;
    font-size: ${({theme}) => theme.fontSize.md};
    font-weight: bold;
  };

  button {
    margin-top: auto;
    width: max-content;
    border: none;
    background: none;
    color: ${({theme}) => theme.colors.green500};
    font-size: 1rem;
    font-weight: bold;
  }`
export const CartFinalization = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;

  button {
    width: 100%;
    background: ${({theme}) => theme.colors.green500};
    color: ${(props) => props.theme.colors.secondary100};
    font-size: ${({theme}) => theme.fontSize.md};
    height: 4.3125rem;
    border: none;
    border-radius: 8px;
    font-weight: bold;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    };

    &:not(:disabled):hover {
      background: ${({theme}) => theme.colors.green300};
    }
  }
`

export const FinalizationDatails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 55px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: ${({theme}) => theme.fontSize.md};
      color: ${({theme}) => theme.colors.gray100};
    };

    span{
      color: ${({theme}) => theme.colors.gray100};
    }

    &:last-child {
      font-weight: bold;
      span{
        font-size: ${({theme}) => theme.fontSize.md};
      };
      p {
        color: ${({theme}) => theme.colors.gray100};
        font-size: ${({theme}) => theme.fontSize.xl};
      };
    }
  }
`