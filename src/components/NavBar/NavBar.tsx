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
  return <nav className={className}>{children}</nav>;
};

export default NavBar;
