'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import LocaleSwitcher from '../LocalSwitcher';
import NavBar from '../NavBar';
import './index.scss';
import Button from '../../Button/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { MobileMenu } from '../SelectMenu/MobileMenu';

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isTop, setIsTop] = useState<boolean>(true);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    const onScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 z-10 flex w-full justify-center ${
        isTop ? 'bg-transparent' : 'bg-white/30'
      } backdrop-blur-md transition-colors duration-300`}
    >
      <div className={`container h-desktop_header w-full desktop:max-w-[1440px] ${!isOpenMenu ? '' : ''}`}>
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
            <Button text="Đăng ký" size="medium" color="secondary" />
            <Button text="Đăng nhập" size="medium" color="primary" classCustom="!bg-primary-surface-default" />
          </div>
        </div>
      </div>
    </header>
  );
};
