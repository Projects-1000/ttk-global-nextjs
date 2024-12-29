import { usePathnameWithoutLocale } from '@/hooks/usePathnameWithoutLocale';
import { NavButtonProps } from '@/types/button.typs';
import { Button } from '@mui/material';

interface SubNavBarButtonProps extends Omit<NavButtonProps, 'subnav'> {}

export const SubNavButton = ({ link, title, isLeafButton, isMobile = false }: SubNavBarButtonProps) => {
  const pathname = usePathnameWithoutLocale();
  const isActive = pathname === link;

  return (
    <Button
      variant="text"
      href={link || undefined}
      className={`${isMobile ? 'h-fit' : 'justify-start h-full whitespace-nowrap text-ellipsis'} ${isActive ? (!isMobile ? 'nav-leaf-button--active' : '') : ''} header-button ${isLeafButton ? 'nav-leaf-button' : ''}`}
    >
      {title}
    </Button>
  );
};
