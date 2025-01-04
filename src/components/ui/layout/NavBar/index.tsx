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
      { title: 'Phản hồi từ đối tác', link: paths.HOME },
      { title: 'Scoreboard', link: paths.HOME }
    ]
  },
  {
    title: 'Mô hình hợp tác',
    link: paths.PARTNERSHIP
    // subnav: [
    //   { title: 'Mô hình hợp tác', link: 'document' },
    //   { title: 'Đối tác kinh doanh', link: 'blogs' }
    // ]
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
      { title: 'Đặt lịch meeting', link: paths.HOME },
      { title: 'Liên hệ hợp tác', link: paths.CONTACT }
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
