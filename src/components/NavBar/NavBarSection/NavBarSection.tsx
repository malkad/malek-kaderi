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

export default NavBarSection;
