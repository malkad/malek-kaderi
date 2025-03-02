"use client";

import { useContext, useEffect, useState } from "react";
import { THEME_LOCAL_STORAGE_KEY, Theme, ThemeContext } from "./Theme.context";
import { getThemeFromLocalStorage, isValidTheme } from "./utils";

interface ThemeProviderProps extends React.PropsWithChildren {
  className?: string;
}

const ThemeContextProvider = ({ children, className }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage);
  const [mounted, setMounted] = useState(false);

  //const toggleTheme = () =>
  const changeTheme = (theme: string = "dark") => {
    setTheme(() => (isValidTheme(theme) ? theme : Theme.DARK));
  };

  useEffect(() => {
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {mounted && (
        <div className={className} data-theme={theme}>
          {children}
        </div>
      )}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider",
    );
  }

  return context;
};

export { ThemeContextProvider, useThemeContext };
