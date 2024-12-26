import { HeaderButton } from '../Button/HeaderButton';

const NavBar = () => {
  const navItems = [
    { title: 'Trang chủ', link: '#' },
    { title: 'Mô hình hợp tác', link: '/' },
    { title: 'Đối tác', link: '/' },
    { title: 'Blog', link: '/blogs' },
    { title: 'Liên hệ', link: '/' },
    { title: 'Tài liệu', link: '/' }
  ];
  return (
    <nav className="hidden h-full items-center tablet:flex">
      {navItems.map(({ title, link }, i) => (
        <HeaderButton key={i} title={title} link={link} />
      ))}
    </nav>
  );
};

export default NavBar;
