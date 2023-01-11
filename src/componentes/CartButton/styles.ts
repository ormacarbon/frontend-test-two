import { styled } from "../../styles";

export const CartButtonContainer = styled('button', {
  width: '3rem',
  height: '3rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  borderRadius: 6,
  border: 'none',
  backgroundColor: '$gray800',
  color: '$gray500',
  

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  variants: {
    color: {
      gray: {
        backgroundColor: '$gray800',
        color: '$gray500',
      },
      green: {
        backgroundColor: '$green500',
        color: '$white',
        '&:not(:disabled):hover':{
          backgroundColor: '$green300',
        }
      },
    },
    size:{
      medium: {
        width: '3rem',
        height: '3rem',
        svg: {
          fontSize: 24,
        },
      },
      large: {
        width: '3.5rem',
        height: '3.5rem',
        svg: {
          fontSize: 32,
        },
      }
    }
  },

  defaultVariants: {
    color: "gray",
    size: 'medium',
  }
});