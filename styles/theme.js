const colors = {
  light: "#f8f9fa",
  dark: "#202028",

  primary100: "#ff4d55",
  primary200: "#FF2330",
  primary300: "#B00C2A",
  
  label: "#4592C430",
  transparent: "transparent",

  orange: "#FD7D24",

  green100: "#9BCC50",
  green200: "#729F3F",

  blue100: "#C3DEF1",
  blue200: "#51C4E7",
  blue300: "#4592C4",

  pink100: "#FDB9E9",
  pink200: "#F366B9",

  yellow100: "#EED535",
  yellow200: "#AB9842",

  purple100: "#B97FC9",
  purple200: "#7B62A3",

  red100: "#FF2330",
  red200: "#B00C2A",
  
  gray100: "#C1C1C1",
  gray200: "#92999C",
  gray300: "#5E6567",
  gray400: "#3d3d4d",
  gray500: "#2C2E3B",
  gray600: "#252733",
  gray700: "#17171e",
};

const fonts = {
  size: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",
    "2xl": "32px",
    "3xl": "48px",
  },
  family: '"Quicksand", sans-serif',
};

const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.5rem",
  "2xl": "2rem",
  "3xl": "3rem",
  "4xl": "4rem",
};

const breakpoints = {
  xs: "320px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

const types = {
  grass: {
    color: colors.green100,
    text: colors.light,
  },
  water: {
    color: colors.blue300,
    text: colors.light,
  },
  fire: {
    color: colors.red100,
    text: colors.light,
  },
  normal: {
    color: colors.gray100,
    text: colors.dark,
  },
  electric: {
    color: colors.yellow100,
    text: colors.dark,
  },
  poison: {
    color: colors.purple100,
    text: colors.light,
  },
  flying: {
    color: colors.blue100,
    text: colors.dark,
  },
  bug: {
    color: colors.green200,
    text: colors.light,
  },
  ground: {
    color: colors.yellow200,
    text: colors.light,
  },
  fairy: {
    color: colors.pink100,
    text: colors.dark,
  },
  fighting: {
    color: colors.red200,
    text: colors.light,
  },
  psychic: {
    color: colors.pink200,
    text: colors.light,
  },
  steel: {
    color: colors.gray200,
    text: colors.light,
  },
  ice: {
    color: colors.blue200,
    text: colors.dark,
  },
  ghost: {
    color: colors.purple200,
    text: colors.light,
  },
  rock: {
    color: colors.gray300,
    text: colors.light,
  },
  dragon: {
    color: colors.orange,
    text: colors.light,
  },
  dark: {
    color: colors.gray700,
    text: colors.light,
  },
};

export const theme = {
  colors: colors,
  fonts: fonts,
  types: types,
  spacing: spacing,
  breakpoints: breakpoints,
};
