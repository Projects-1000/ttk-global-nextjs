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

type direction = 'up' | 'down' | null;
export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState<direction>(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <header
      className={`container fixed top-0 z-[1000] flex w-full justify-center smooth-transition ${
        scrollDirection === 'down' ? 'max-tablet:-translate-y-full' : 'max-tablet:translate-y-0'
      } backdrop-blur-md`}
    >
      <div className={`h-mobile_header w-full laptop:h-desktop_header desktop:max-w-[1440px] ${!isOpenMenu ? '' : ''}`}>
        <div className="flex h-full items-center justify-between">
          <div className="flex h-full items-center gap-l">
            <div className="relative h-full w-[136px] tablet:w-[152px]">
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
