import Color from "color";

function enrichMainColor(mainColor: any) {
  return {
    light: mainColor.light,
    main: mainColor.main,
    dark: mainColor.dark,
    contrastText: mainColor.contrastText,
  };
}

function generateShade(shadeColor: string) {
  const shades = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  return shades.reduce((acc, value) => {
    acc[value] = Color(shadeColor)
      .alpha(value / 100)
      .toString();
    return acc;
  }, {});
}

function enrichPalette(rawTheme: any) {
  return {
    common: {
      white: "#ffffff",
      dark: "#000000",
    },
    type: rawTheme.palette.type,
    primary: enrichMainColor(rawTheme.palette.primary),
    secondary: enrichMainColor(rawTheme.palette.secondary),
    warning: enrichMainColor(rawTheme.palette.warning),
    error: enrichMainColor(rawTheme.palette.error),
    info: enrichMainColor(rawTheme.palette.info),
    success: enrichMainColor(rawTheme.palette.success),
    background: rawTheme.palette.background,
    shade: generateShade(rawTheme.palette.shade),
    divider: rawTheme.palette.divider,
  };
}

export function enrichTheme(rawTheme: any) {
  return {
    palette: enrichPalette(rawTheme),
  };
}
