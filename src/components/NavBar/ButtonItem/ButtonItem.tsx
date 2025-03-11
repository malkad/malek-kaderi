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

export default ButtonItem;
