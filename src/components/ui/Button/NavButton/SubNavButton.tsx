import { usePathnameWithoutLocale } from '@/hooks/usePathnameWithoutLocale';
import { NavButtonProps } from '@/types/button.typs';
import { Button } from '@mui/material';

interface SubNavBarButtonProps extends Omit<NavButtonProps, 'subnav' | 'isMobile'> {}

export const SubNavButton = ({ link, title, isLeafButton }: SubNavBarButtonProps) => {
  const pathname = usePathnameWithoutLocale();
  const isActive = pathname === link;

  return (
    <Button
      variant="text"
      href={link || undefined}
      className={`${isActive ? 'nav-leaf-button--active' : ''} header-button ${isLeafButton ? 'nav-leaf-button' : ''}`}
    >
      {title}
    </Button>
  );
};
