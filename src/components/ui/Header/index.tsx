import Image from 'next/image';
import SubmitButton from '../Button/Button';
import LocaleSwitcher from '../LocalSwitcher';
import NavBar from '../NavBar';

export const Header = () => {
  return (
    <header className="container h-desktop_header bg-slate-100">
      <div className="flex h-full items-center justify-between">
        <div className="flex h-full items-center gap-l">
          <div className="relative h-full w-44">
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
        <div className="flex items-center gap-m">
          <LocaleSwitcher />
          <SubmitButton text="Đăng ký" size="medium" color="secondary" />
          <SubmitButton text="Đăng nhập" size="medium" color="primary" />
        </div>
      </div>
    </header>
  );
};
