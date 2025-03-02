"use client";

import { THEME_VALUES } from "~/contexts/ThemeContext/Theme.context";
import { useThemeContext } from "~/contexts/ThemeContext/Theme.provider";
import { NavBar, NavBarSection, LinkItem } from "~/components/NavBar";
import { ThemeSwitcher } from "~/components/ThemeSwitcher";

const logo =
  "https://utfs.io/f/rFQ9luVpP9HJZF82qNOrgGJc2fTMpnK5Ayb16xNjmE7CBohX";

const TopNavBar = () => {
  return (
    <div className="topnavbar">
      <NavBar>
        <NavBarSection>
          <LinkItem href="/" className="logo">
            <img src={logo} alt="Malek Kaderi" />
          </LinkItem>
          <LinkItem href="/" className="desk site-name">
            <div className="name">Malek Kaderi</div>
          </LinkItem>
          <LinkItem href="/" className="mob site-name">
            {"{MK}"}
          </LinkItem>
        </NavBarSection>
        <NavBarSection className="navigation">
          <LinkItem href="/resume" className="desk">
            {"Resume"}
          </LinkItem>
          <LinkItem href="/portfolio" className="desk">
            {"Portfolio"}
          </LinkItem>
        </NavBarSection>
        <NavBarSection className="actions">
          <ThemeSwitcher />
        </NavBarSection>
      </NavBar>
    </div>
  );
};

export default TopNavBar;
