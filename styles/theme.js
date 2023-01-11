const colors = {
  primary: '#0094C6',
  light: '#f8f9fa',
  dark: '#202028',

  orange: '#FD7D24',

  green: {
    '100': '#9BCC50',
    '200': '#729F3F'
  },
  blue: {
    '100': '#C3DEF1',
    '200': '#51C4E7',
    '300': '#4592C4',
  },
  pink: {
    '100': '#FDB9E9',
    '200': '#F366B9',
  },
  yellow: {
    '100': '#EED535',
    '200': '#AB9842',
  },
  purple: {
    '100': '#B97FC9',
    '200': '#7B62A3',
  },
  red: {
    '100': '#E3350D',
    '200': '#B00C2A',
  },
  gray: {
    '100': '#C1C1C1',
    '200': '#92999C',
    '300': '#5E6567',
  }
}

const fonts = {
  size: {
    small: '14px',
    medium: '16px',
    large: '20px',
  },
  family: {
    heading: '"Open Sans", sans-serif',
    body: '"Quicksand", sans-serif',
  },
}

const spacing = {
  xs: '5px',
  sm: '10px',
  md: '20px',
  lg: '30px',
}

const breakpoints = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
}

const types = {
  grass: {
    color: colors.green[100],
    text: colors.light,
  },
  water: {
    color: colors.blue[300],
    text: colors.light,
  },
  fire: {
    color: colors.red[100],
    text: colors.light,
  },
  normal: {
    color: colors.gray[100],
    text: colors.dark,
  },
  electric: {
    color: colors.yellow[100],
    text: colors.dark,
  },
  poison: {
    color: colors.purple[100],
    text: colors.light,
  },
  flying: {
    color: colors.blue[100],
    text: colors.dark,
  },
  bug: {
    color: colors.green[200],
    text: colors.light
  },
  ground: {
    color: colors.yellow[200],
    text: colors.light,
  },
  fairy: {
    color: colors.pink[100],
    text: colors.dark,
  },
  figthing: {
    color: colors.red[200],
    text: colors.light,
  },
  psychic: {
    color: colors.pink[200],
    text: colors.light,
  },
  steel: {
    color: colors.gray[200],
    text: colors.light,
  },
  ice: {
    color: colors.blue[200],
    text: colors.dark,
  },
  ghost: {
    color: colors.purple[200],
    text: colors.light,
  },
  rock: {
    color: colors.gray[300],
    text: colors.light,
  },
  dragon: {
    color: colors.orange,
    text: colors.light,
  }
}

export const theme = {
  colors: colors,
  fonts: fonts,
  types: types,
  spacing: spacing,
  breakpoints: breakpoints
}