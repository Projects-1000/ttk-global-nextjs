'use client';
import { usePathnameWithoutLocale } from '@/hooks/usePathnameWithoutLocale';
import { NavButtonProps } from '@/types/button.typs';
import { Button } from '@mui/material';
import { useState } from 'react';
import { DesktopSubMenu, MobileSubMenu } from '../../layout/SelectMenu/SubMenu';
import './index.scss';
import { ArrowDropDownIcon } from '../../icons/ArrowDropDownIcon';

export const NavButton = ({ title, link, subnav, isLeafButton = false, isMobile = false }: NavButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathnameWithoutLocale();

  const isCurrentSegment = () => subnav?.find(({ link }) => link === pathname) || link === pathname;
  const isActive = isCurrentSegment();

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button
        variant="text"
        onMouseLeave={!isMobile ? handleMouseLeave : undefined}
        onMouseEnter={!isMobile ? handleMouseEnter : undefined}
        onClick={isMobile ? handleClick : undefined}
        href={link || undefined}
        className={`${isMobile && isOpen ? 'nav-mobile-button--active' : ''} ${isMobile ? 'nav-mobile-button' : ''} flex flex-col ${isActive && !isMobile ? 'header-button--active' : ''} header-button ${isLeafButton ? 'nav-leaf-button' : ''}`}
      >
        <div className="flex w-full shrink-0 items-center justify-center gap-m normal-case">
          {title}
          {subnav && (
            <ArrowDropDownIcon
              className={`smooth-transition text-greyscale-subtitle duration-[350ms] ${isOpen ? '-rotate-180' : ''}`}
            />
          )}
        </div>
        {subnav && !isMobile && <DesktopSubMenu isOpen={isOpen} subnav={subnav} />}
      </Button>
      {subnav && isMobile && <MobileSubMenu isOpen={isOpen} subnav={subnav} />}
    </>
  );
};
