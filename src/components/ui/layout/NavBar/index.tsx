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
      { title: 'Phản hồi từ đối tác', link: 'about' },
      { title: 'Scoreboard', link: 'history' }
    ]
  },
  {
    title: 'Mô hình hợp tác',
    link: 'partnership'
    // subnav: [
    //   { title: 'Mô hình hợp tác', link: 'document' },
    //   { title: 'Đối tác kinh doanh', link: 'blogs' }
    // ]
  },
  {
    title: 'Tài nguyên',
    subnav: [
      { title: 'Tài liệu', link: 'document' },
      { title: 'Blog', link: '/blogs' }
    ]
  },
  {
    title: 'Liên hệ',
    subnav: [
      { title: 'Đặt lịch meeting', link: 'document' },
      { title: 'Liên hệ hợp tác', link: 'blogs' }
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
