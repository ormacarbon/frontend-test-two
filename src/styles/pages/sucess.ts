import { styled } from '..';

export const SucessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: '1.4',
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    color: '$green500',
    fontSize: '$lg',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300'
    }
  }
})

export const ImagesContainer = styled('section', {
  display: 'flex',
  alignContent: 'center',
  marginBottom: '3rem',

  "div + div": {
    marginLeft: 'calc(-140px / 2)',
  }
});

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',

  img: {
    objectFit: 'cover',
  }
})