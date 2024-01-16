import { ReactNode } from 'react';

interface ScrollLinkProps {
  targetId: string;
  children: ReactNode;
  onClick?: () => void;
}

const SmoothScroll: React.FC<{ targetId: string; onClick: () => void; children: React.ReactNode }> = ({ targetId, onClick, children }) => {
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      onClick();
    }
  };

  return (
    <a href={`#${targetId}`} onClick={handleLinkClick}>
      {children}
    </a>
  );
};

export default SmoothScroll;
