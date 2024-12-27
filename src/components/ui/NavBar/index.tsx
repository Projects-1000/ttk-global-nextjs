import { HeaderButton } from '../Button/HeaderButton';

const NavBar = () => {
  const navItems = [
    { title: 'Trang chủ', link: '/' },
    { title: 'Mô hình hợp tác', link: 'how-it-work' },
    { title: 'Đối tác', link: 'partnership' },
    { title: 'Blog', link: 'blogs' },
    { title: 'Liên hệ', link: 'contact' },
    { title: 'Tài liệu', link: 'document' }
  ];
  return (
    <nav className="hidden h-full items-center laptop:flex">
      {navItems.map(({ title, link }, i) => (
        <HeaderButton key={i} title={title} link={link} />
      ))}
    </nav>
  );
};

export default NavBar;
