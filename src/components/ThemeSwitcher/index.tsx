import { THEME_VALUES } from "~/contexts/ThemeContext/Theme.context";
import { useThemeContext } from "~/contexts/ThemeContext/Theme.provider";

import { ButtonItem } from "../NavBar";

export const ThemeSwitcher = () => {
  const { theme, changeTheme } = useThemeContext();

  return (
    <>
      {THEME_VALUES.map((t) => {
        return (
          <ButtonItem key={t} onClick={() => changeTheme(t)}>
            {t}
          </ButtonItem>
        );
      })}
    </>
  );
};
