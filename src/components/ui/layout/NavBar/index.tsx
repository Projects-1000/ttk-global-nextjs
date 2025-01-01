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
    title: 'Cho đối tác',
    subnav: [
      { title: 'Mô hình hợp tác', link: 'document' },
      { title: 'Đối tác kinh doanh', link: 'blogs' },
    ]
  },
  {
    title: 'Tài nguyên',
    subnav: [
      { title: 'Tài liệu', link: 'document' },
      { title: 'Blog', link: '/blogs' }
    ]
  },
  { title: 'Liên hệ', link: 'contact' }
];

const NavBar = () => {
  return (
    <nav className="hidden h-full items-center laptop:flex gap-xs">
      {navItems.map(({ title, link, subnav }, i) => (
        <NavButton key={i} title={title} link={link} subnav={subnav} isLeafButton={false} isMobile={false} />
      ))}
    </nav>
  );
};

export default NavBar;
