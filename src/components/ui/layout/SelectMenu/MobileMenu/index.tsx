import { NavButtonProps } from '@/types/button.type';
import { useEffect } from 'react';
import { NavButton } from '../../../Button/NavButton';
import { navItems } from '../../NavBar';
import LocaleSwitcher from '../../LocalSwitcher';
import Button from '@/components/ui/Button/Button';

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
    <>
      <menu
        className={`absolute inset-0 z-50 flex h-[calc(100dvh-var(--mobile-header-height))] w-full translate-y-mobile_header flex-col items-center justify-between overflow-x-hidden bg-white p-mobile_container tablet:w-1/2 ${isOpen ? 'mobile-menu--open' : 'mobile-menu--close'}`}
      >
        <div className="flex h-fit flex-col items-center gap-xs">
          {navItems.map(({ title, link, subnav }, i) => (
            <NavButton isMobile key={i} title={title} link={link} subnav={subnav} isLeafButton={false} />
          ))}
        </div>
        <div
          className="-top-mobile_container flex w-full flex-col justify-end gap-xl border-t border-t-greyscale-border-default py-2xl tablet:hidden"
          style={{ borderTopStyle: 'solid' }}
        >
          <div className="flex flex-col gap-l">
            <Button text="Đăng ký" size="medium" color="secondary" classCustom="w-full" />
            <Button text="Đăng nhập" size="medium" color="primary" classCustom="w-full" />
          </div>
          <div className="self-end">
            <LocaleSwitcher />
          </div>
        </div>
      </menu>
      <div className={`mobile-menu__backdrop z-[-1] translate-y-mobile_header h-[calc(100dvh-var(--mobile-header-height))] ${isOpen ? 'mobile-menu__backdrop--open' : 'mobile-menu__backdrop--close'}`}></div>
    </>
  );
};
