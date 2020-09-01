import React, { useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { enrichTheme } from "./loader";

type LedgerUIThemeProviderProps = {
  children?: React.ReactElement;
  rawThemes: { [themeKey: string]: any };
  currentThemeKey: string;
};

export function LedgerUIThemeProvider({
  children,
  rawThemes,
  currentThemeKey,
}: LedgerUIThemeProviderProps): React.ReactElement {
  const theme = useMemo(() => enrichTheme(rawThemes[currentThemeKey]), [
    currentThemeKey,
  ]);

  console.log(theme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
