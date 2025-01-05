import paths from '@/utils/paths';
import { NavButton } from '../../Button/NavButton';

export interface SubNavBarProps {
  title: string;
  link?: string;
}

export interface NavBarItemProps extends SubNavBarProps {
  subnav?: SubNavBarProps[];
}

export type NavBarProps = NavBarItemProps[];

export const navItems: NavBarProps = [
  {
    title: 'Về Công ty',
    subnav: [
      { title: 'Giới thiệu', link: paths.HOME },
      { title: 'Phản hồi từ đối tác', link: '#' },
      { title: 'Scoreboard', link: '#' }
    ]
  },
  {
    title: 'Mô hình hợp tác',
    link: paths.HOW_IT_WORK
  },
  {
    title: 'Tài nguyên',
    subnav: [
      { title: 'Tài liệu', link: paths.DOCUMENT },
      { title: 'Blog', link: paths.BLOGS }
    ]
  },
  {
    title: 'Liên hệ',
    subnav: [
      { title: 'Đặt lịch meeting', link: paths.CONTACT },
      { title: 'Liên hệ hợp tác', link: paths.PARTNERSHIP }
    ]
  }
];

const NavBar = () => {
  return (
    <nav className="hidden h-full items-center gap-xs laptop:flex">
      {navItems.map(({ title, link, subnav }, i) => (
        <NavButton key={i} title={title} link={link} subnav={subnav} isLeafButton={false} isMobile={false} />
      ))}
    </nav>
  );
};

export default NavBar;
