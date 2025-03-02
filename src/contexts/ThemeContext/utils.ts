import {
  THEME_DEFAULT,
  THEME_LOCAL_STORAGE_KEY,
  THEME_VALUES,
  Theme,
} from "./Theme.context";

const isValidTheme = (value: string): value is Theme =>
  THEME_VALUES.includes(value);

const getThemeFromLocalStorage = (): Theme => {
  if (typeof window === "undefined") return THEME_DEFAULT;

  const themeValue = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);

  if (themeValue && isValidTheme(themeValue)) return themeValue;

  return THEME_DEFAULT;
};

export { getThemeFromLocalStorage, isValidTheme };
