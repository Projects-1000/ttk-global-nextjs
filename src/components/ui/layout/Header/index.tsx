'use client';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import { useState } from 'react';
import SubmitButton from '../../Button/Button';
import NavBar from '../NavBar';
import { MobileMenu } from '../SelectMenu/MobileMenu';
import './index.scss';
import LocaleSwitcher from '../LocalSwitcher';

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <header className={`container relative h-desktop_header bg-slate-100`}>
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
        <div className="laptop:hidden" onClick={handleOpenMenu}>
          <MenuIcon className={`menu-icon ${isOpenMenu ? 'translate-x-[50px]' : ''} `} />
          <CloseIcon className={`menu-icon ${isOpenMenu ? '' : 'translate-x-[50px]'}`} />
        </div>
        <MobileMenu isOpen={isOpenMenu} />
        <div className="hidden items-center gap-m laptop:flex">
          <LocaleSwitcher />
          <SubmitButton text="Đăng ký" size="medium" color="secondary" />
          <SubmitButton text="Đăng nhập" size="medium" color="primary" />
        </div>
      </div>
    </header>
  );
};
