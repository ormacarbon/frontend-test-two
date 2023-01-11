import { styled } from '..';
export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  maxWidth: 1100,
  margin: '0 auto',
});

export const ImageContainer = styled('div', {
width: '100%',
height: 656,
maxWidth: 576,
borderRadius: 8,
padding: '0.25rem',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',

 img:{
  objectFit: 'center',
 }
});

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1:{
    fontSize: '$2xl',
    color: '$gray300',
  },

  span:{
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },

  p:{
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$White',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:not(:disabled):hover':{
      backgroundColor: '$green300'
    },

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    }
  }
})