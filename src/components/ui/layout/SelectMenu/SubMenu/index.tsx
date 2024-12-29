import { NavButtonProps } from '@/types/button.typs';
import { SubNavButton } from '../../../Button/NavButton/SubNavButton';

interface SubMenuProps extends Pick<NavButtonProps, 'subnav'> {
  isOpen: boolean;
}

export const DesktopSubMenu = ({ subnav, isOpen }: SubMenuProps) => {
  return (
    <div
      className={`absolute left-0 top-[80%] z-10 overflow-hidden rounded-2xs bg-white text-start shadow-md ${isOpen ? 'block' : 'hidden'}`}
    >
      {subnav?.map(({ title, link }, index) => (
        <SubNavButton key={index} link={link} title={title} isMobile={false} isLeafButton />
      ))}
    </div>
  );
};

export const MobileSubMenu = ({ subnav, isOpen }: SubMenuProps) => {
  return (
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
      {subnav?.map(({ title, link }, index) => (
        <SubNavButton key={index} link={link} isMobile={true} title={title} isLeafButton />
      ))}
    </div>
  );
};
