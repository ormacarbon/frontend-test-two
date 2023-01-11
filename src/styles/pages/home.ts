import { styled } from '..';
export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
});

export const SliderContainer = styled('div', {
  display: 'flex',
  gap: '3rem',
  margin: '0 auto',
  '.embla__slide': {
    minWidth: '43.5rem',
  }
});

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  cursor:   'pointer',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: 656,

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent:  'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2a ease-in-out',

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
    },

    strong: {
      fontSize: '$lg',
      color: '$gray100',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },
  },
  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
});