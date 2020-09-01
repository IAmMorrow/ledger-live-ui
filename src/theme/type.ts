export type MainColor = {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
};

export type Shades = {
  5: string;
  10: string;
  20: string;
  30: string;
  40: string;
  50: string;
  60: string;
  70: string;
  80: string;
  90: string;
  100: string;
};

export type Palette = {
  common: { [name: string]: string };
  type: "light" | "dark";
  primary: MainColor;
  secondary: MainColor;
  error: MainColor;
  warning: MainColor;
  info: MainColor;
  success: MainColor;
  shade: Shades;
  background: {
    paper: string;
    default: string;
  };
  divider: string;
};

export type Theme = {
  palette: Palette;
};
