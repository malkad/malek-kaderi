import { createContext } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
  //SOLARISED = "solarized",
}

export const THEME_LOCAL_STORAGE_KEY = "theme";
export const THEME_DEFAULT = Theme.DARK;
export const THEME_VALUES: string[] = Object.values(Theme);

export type ThemeContextData = {
  theme: Theme;
  changeTheme: (theme: string) => void;
};

const DEFAULT_VALUE: ThemeContextData = {
  theme: THEME_DEFAULT,
  changeTheme: (theme: string) => {},
};

export const ThemeContext = createContext<ThemeContextData>(DEFAULT_VALUE);
