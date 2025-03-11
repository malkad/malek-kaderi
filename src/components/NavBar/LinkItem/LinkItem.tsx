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

export default LinkItem;
