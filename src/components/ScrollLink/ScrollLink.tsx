import { ReactNode } from 'react';

interface ScrollLinkProps {
  targetId: string;
  children: ReactNode;
  onClick?: () => void;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ targetId, children }) => {
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a href={`#${targetId}`} onClick={handleLinkClick}>
      {children}
    </a>
  );
}
export default ScrollLink;