import { DefaultTheme, CustomTheme } from 'styled-components';
import dark from './dark';
import light from './light';

const defaultTheme = {
  spacings: {
    xSmall: '5px',
    small: '10px',
    medium: '15px',
    large: '20px',
    xLarge: '50px'
  },

  content: {
    size: {
      large: '960px',
      medium: '767px'
    }
  },

  font: {
    sizes: {
      small: '0.8125rem',
      medium: '1rem',
      large: '1.125rem',
      xLarge: '1.5rem',
      xxLarge: '2rem'
    },
    weight: {
      light: '300',
      regular: '400',
      semiBold: '600',
      bold: '700',
    }
  },

  box: {
    shadow: '2px 6px 8px rgba(0,0,0,0.3)',
    border: '2px solid #595959',
    radius: '5px',
  }
};

function combineTheme(theme: CustomTheme): DefaultTheme {
  return { ...defaultTheme, ...theme };
}

export { combineTheme, dark, light };
