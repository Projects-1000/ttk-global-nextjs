import { NavButtonProps } from '@/types/button.typs';
import { useEffect } from 'react';
import { NavButton } from '../../../Button/NavButton';
import { navItems } from '../../NavBar';
import LocaleSwitcher from '../../LocalSwitcher';

interface MobileMenuProps extends Pick<NavButtonProps, 'subnav'> {
  isOpen: boolean;
}

export const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <menu
      className={`absolute inset-0 z-50 flex h-[calc(100dvh-var(--desktop-header-height))] w-full translate-y-desktop_header flex-col items-center justify-between overflow-hidden bg-white p-mobile_container ${isOpen ? 'mobile-menu--open' : 'mobile-menu--close'}`}
    >
      <div className="flex h-fit flex-col items-center gap-xs">
        {navItems.map(({ title, link, subnav }, i) => (
          <NavButton isMobile key={i} title={title} link={link} subnav={subnav} isLeafButton={false} />
        ))}
      </div>
      <div
        className="-top-mobile_container flex w-full justify-end border-t border-t-greyscale-border-default py-2xl"
        style={{ borderTopStyle: 'solid' }}
      >
        <LocaleSwitcher />
      </div>
    </menu>
  );
};
