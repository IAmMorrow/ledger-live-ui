import React, { useEffect, useState } from 'react'
import { addons } from '@storybook/addons'
import { LedgerUIThemeProvider } from '../src/theme/Provider'

const themeRequireContext = require.context("./themes", true, /\.(json)$/);
const themeRegexp = /\.\/(.+).json/;

const rawThemes = themeRequireContext.keys().reduce((acc, filename) => {
  const name = filename.match(themeRegexp)[1];
  acc[name] = themeRequireContext(filename);
  return acc;
}, {});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "light",
    values: Object.keys(rawThemes).reduce((acc, key) => {
      const value = rawThemes[key];
      acc.push({
        name: key,
        value: value.palette.background.default,
      });
      return acc;
    }, []),
  }
}

let currentTheme = "light";
export const decorators = [
  Story => {
  const [themeKey, setThemeKey] = useState(currentTheme);

  useEffect(() => {
    const updateBg = (bg) => {
      setThemeKey(bg.name);
      currentTheme = bg.name;
    }
    addons.getChannel().addListener('storybook/background/update', updateBg);
    return () => addons.getChannel().removeListener('storybook/background/update', updateBg);
  }, []);

  return (
    <LedgerUIThemeProvider rawThemes={rawThemes} currentThemeKey={themeKey}>
      <Story />
    </LedgerUIThemeProvider>
  )
  },
];