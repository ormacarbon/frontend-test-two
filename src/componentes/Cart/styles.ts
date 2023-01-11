import { styled } from '../../styles';
import * as Dialog from '@radix-ui/react-dialog';

export const CartContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '35%',
  backgroundColor: '$gray800',
  padding: '3rem',
  paddingTop: '4.5rem',
  boxShadow: '-4px 8px 30px rgba(0, 0, 0, 0.8)',
  display: 'flex',
  flexDirection: 'column',

  h2:{
    fontWeight: 'bold',
    fontSize: '$lg',
    color: '$gray100',
    marginBottom: '2rem',
  },

  '> section': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    overflowY: 'auto',
    flex: 1,
  }
}); 

export const CartClose = styled(Dialog.Close, {
  background: 'none',
  border: 'none',
  color: '$gray500',
  position: 'absolute',
  top: '1.75rem',
  right: '1.75rem',
});

export const CartProduct = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '1.25rem',
  alignItems: 'center',
  minHeight: '5.8125rem',
});

export const CartProductImage = styled('div', {
  width: '6.3125rem',
  height: '5.125rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',

  img: {
    objectFit: 'cover',
  }
});

export const CartCProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: "space-between",

  p: {
    color: '$gray300',
    fontSize: '$md',
  },

  strong: {
    marginTop: 4,
    fontSize: '$md',
    fontWeight: 'bold',
  },

  button: {
    marginTop: 'auto',
    width: 'max-content',
    border: 'none',
    background: 'none',
    color: '$green500',
    fontSize: '1rem',
    fontWeight: 'bold',
  }
});

export const CartFinalization = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',

  button: {
    width: '100%',
    background: '$green500',
    color: '$white',
    fontSize: '$md',
    height: '4.3125rem',
    border: 'none',
    borderRadius: 8,
    fontWeight: 'bold',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      background: '$green300',
    }
  }
});

export const FinalizationDatails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  marginBottom: 55,

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    p: {
      fontSize: '$md',
      color: '$gray300',
    },

    '&:last-child': {
      fontWeight: 'bold',
      span:{
        fontSize: '$md',
      },
      p: {
        color: '$gray100',
        fontSize: '$xl',
      },
    }
  }
});