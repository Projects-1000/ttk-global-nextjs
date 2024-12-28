'use client';

import { NavButtonProps } from '@/types/button.typs';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import SubmitButton from '../Button/Button';
import { NavButton } from '../Button/NavButton';
import LocaleSwitcher from '../LocalSwitcher';
import NavBar, { navItems } from '../NavBar';
import './index.scss';

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <header
      className={`container relative h-desktop_header bg-slate-100 ${!isOpenMenu ? '' : ''}`}
    >
      <div className="flex h-full items-center justify-between">
        <div className="flex h-full items-center gap-l">
          <div className="relative h-full w-44">
            <Image
              alt="TTK Global Venture"
              src={'/assets/demo/header-logo.png'}
              fill
              className="object-contain object-center"
              loading="eager"
            />
          </div>
          <NavBar />
        </div>
        <div className="tablet:hidden" onClick={handleOpenMenu}>
          <MenuIcon className={`menu-icon ${isOpenMenu ? 'translate-x-[50px]' : ''}`} />
          <CloseIcon className={`menu-icon ${isOpenMenu ? '' : 'translate-x-[50px]'}`} />
        </div>
        <MobileMenu isOpen={isOpenMenu} />
        <div className="hidden items-center gap-m tablet:flex">
          <LocaleSwitcher />
          <SubmitButton text="Đăng ký" size="medium" color="secondary" />
          <SubmitButton text="Đăng nhập" size="medium" color="primary" />
        </div>
      </div>
    </header>
  );
};

interface MobileMenuProps extends Pick<NavButtonProps, 'subnav'> {
  isOpen: boolean;
}
const MobileMenu = ({ isOpen }: MobileMenuProps) => {
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
      className={`absolute inset-0 z-20 h-dvh w-full translate-y-desktop_header overflow-hidden bg-white p-mobile_container ${isOpen ? 'mobile-menu--open' : 'mobile-menu--close'}`}
    >
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-xs">
          {navItems.map(({ title, link, subnav }, i) => (
            <NavButton isMobile key={i} title={title} link={link} subnav={subnav} isLeafButton={false} />
          ))}
        </div>
      </div>
    </menu>
  );
};
