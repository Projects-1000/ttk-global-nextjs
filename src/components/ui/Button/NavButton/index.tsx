'use client';
import { usePathnameWithoutLocale } from '@/hooks/usePathnameWithoutLocale';
import { NavButtonProps } from '@/types/button.typs';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button } from '@mui/material';
import { useState } from 'react';
import './index.scss';
import { SubNavButton } from './SubNavButton';

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
        className={`${isActive ? 'header-button--active' : ''} header-button ${isLeafButton ? 'nav-leaf-button' : ''}`}
      >
        <div className="flex w-full justify-between">
          {title}
          {subnav && <ArrowDropDownIcon className="text-greyscale-subtitle" />}
        </div>
        {subnav && !isMobile && <DesktopSubMenu isOpen={isOpen} subnav={subnav} />}
        {subnav && isMobile && <MobileSubMenu isOpen={isOpen} subnav={subnav} />}
      </Button>
    </>
  );
};

interface DesktopSubMenuProps extends Pick<NavButtonProps, 'subnav'> {
  isOpen: boolean;
}

export const DesktopSubMenu = ({ subnav, isOpen }: DesktopSubMenuProps) => {
  return (
    <div
      className={`absolute left-0 top-[80%] z-10 overflow-hidden rounded-2xs bg-white text-start shadow-md ${isOpen ? 'block' : 'hidden'}`}
    >
      {subnav?.map(({ title, link }, index) => <SubNavButton key={index} link={link} title={title} isLeafButton />)}
    </div>
  );
};

export const MobileSubMenu = ({ subnav, isOpen }: DesktopSubMenuProps) => {
  return (
    <div
      className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
        isOpen ? 'max-h-[500px]' : 'max-h-0'
      }`}
    >
      {subnav?.map(({ title, link }, index) => <SubNavButton key={index} link={link} title={title} isLeafButton />)}
    </div>
  );
};
