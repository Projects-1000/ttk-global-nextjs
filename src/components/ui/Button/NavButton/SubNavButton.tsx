import { usePathnameWithoutLocale } from '@/hooks/usePathnameWithoutLocale';
import { NavButtonProps } from '@/types/button.type';
import { Button } from '@mui/material';

interface SubNavBarButtonProps extends Omit<NavButtonProps, 'subnav'> {}

export const SubNavButton = ({ link, title, isLeafButton, isMobile = false }: SubNavBarButtonProps) => {
  const pathname = usePathnameWithoutLocale();
  const isActive = pathname === link;

  return (
    <Button
      variant="text"
      href={link || undefined}
      className={`${isMobile ? 'h-fit' : 'h-full justify-start text-ellipsis whitespace-nowrap'} ${isActive ? (!isMobile ? 'nav-leaf-button--active' : '') : ''} ${isLeafButton ? 'nav-leaf-button' : ''} header-button normal-case`}
    >
      {title}
    </Button>
  );
};
