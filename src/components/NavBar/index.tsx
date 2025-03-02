import Link from "next/link";

/**
 * LinkItem component
 * @typedef {Object} LinkItemProps
 * @property {string} href
 * @property {string} className
 * @property {React.ReactNode} children
 */
type LinkItemProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const LinkItem = ({ href, className = "", children }: LinkItemProps) => {
  return (
    <Link href={href} className={`nav-item ${className}`}>
      {children}
    </Link>
  );
};

/**
 * ButtonItem component
 * @typedef {Object} ButtonItemProps
 * @property {string} className
 * @property {React.ReactNode} children
 * @property {() => void} onClick
 */
type ButtonItemProps = {
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
};

const ButtonItem = ({ className = "", children, onClick }: ButtonItemProps) => {
  return (
    <button className={`nav-item ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

/**
 * NavBarSection component
 * @typedef {Object} NavBarSectionProps
 * @property {React.ReactNode} children
 * @property {string} className
 */
type NavBarSectionProps = {
  children: React.ReactNode;
  className?: string;
};

const NavBarSection = ({ className = "", children }: NavBarSectionProps) => {
  return <div className={`navbar-section ${className}`}>{children}</div>;
};

/**
 * NavBar component
 * @typedef {Object} NavBarProps
 * @property {React.ReactNode} children
 * @property {string} className
 */
type NavBarProps = {
  children: React.ReactNode;
  className: string;
};

const NavBar = ({ className = "", children }: NavBarProps) => {
  return <nav className={`${className}`}>{children}</nav>;
};

export { LinkItem, ButtonItem, NavBarSection, NavBar };
