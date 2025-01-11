'use client';
import { FacebookOutlined, Google, Instagram } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import SubmitButton from '../../Button/Button';
import './index.scss';
import ControlledInput from '../../Input';
import { NavBarItemProps, navItems } from '../NavBar';

const icons = [<FacebookOutlined key={1} className="" />, <Google key={2} />, <Instagram key={3} />];
const infoData = [
  {
    id: 'address-1',
    title: 'Chi nhánh HCM:',
    content: [{ title: '26 Đường 51-BTT, Bình Trưng Tây, Quận 2, Thủ Đức', link: '' }]
  },
  {
    id: 'address-2',
    title: 'Chi nhánh US:',
    content: [{ title: '30 N Gould St Ste R Sheridan, Wyoming 82801', link: '' }]
  },
  {
    id: 'email',
    title: 'Email:',
    content: [{ title: 'contact@ttkglobalventures.com', link: 'mailto:contact@ttkglobalventures.com' }]
  },
  {
    id: 'phone',
    title: 'Phone:',
    content: [{ title: '055 907 5545', link: 'tel:055 907 5545' }]
  }
];

interface FooterNavListProps extends NavBarItemProps {
  direction?: 'column' | 'row';
}

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center bg-blue-600">
      <div className="container w-full max-w-[1440px] py-[40px] tablet:py-[60px]">
        <div className="footer-container flex flex-col overflow-hidden">
          <div className="flex flex-col items-start justify-start gap-4xl">
            <div className="w-[50%] self-start tablet:w-[40%] laptop:w-[25%]">
              <Image
                src="https://res.cloudinary.com/dh6bfx865/image/upload/v1735060367/ttk-global/Logo_gsse3o.png"
                alt="logo"
                sizes="100vw"
                className="h-auto w-full object-cover object-center"
                width={0}
                height={0}
              />
            </div>
            <div className="flex w-full flex-col justify-between gap-3xl laptop:flex-row">
              <div className="flex w-full gap-l text-greyscale-negative tablet:gap-[60px]">
                <div className="flex w-2/3 max-w-[360px] flex-col gap-l  laptop:gap-3xl">
                  <span className="footnote-regular tablet:body-regular">
                    Nhà phát triển Thương mại điện tử Quốc tế - Đơn vị trung gian hàng đầu tại Việt Nam cung cấp các
                    giải pháp giúp doanh nghiệp Việt bán hàng xuyên biên giới.
                  </span>
                  {infoData.map(({ content, title, id }, i) => {
                    return (
                      <FooterNavList
                        key={i}
                        title={title}
                        subnav={content}
                        direction={id === 'email' || id === 'phone' ? 'row' : 'column'}
                      />
                    );
                  })}
                </div>
                <div className="flex w-1/3 flex-col gap-l laptop:gap-3xl">
                  <span className="footnote-bold tablet:body-bold">Danh mục</span>
                  {navItems.map(({ title, link, subnav }, i) => (
                    <div className="flex flex-col gap-s laptop:gap-3xl">
                      <FooterNavList key={i} title={title} link={link} subnav={subnav} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex w-full flex-col gap-l gap-m text-greyscale-negative tablet:w-1/2 laptop:max-w-[360px] laptop:gap-3xl">
                <span className="footnote-bold tablet:body-bold">Theo dõi chúng tôi</span>
                <div className="relative">
                  <ControlledInput placeholder="Email" />
                  <SubmitButton
                    isDirty={true}
                    text="Gửi"
                    size="small"
                    color="primary"
                    classCustom="!body-regular absolute right-[10px] top-1/2 -translate-y-1/2"
                    isSubmitting={false}
                  />
                </div>
                <span className="footnote-bold tablet:body-bold">
                  Đăng ký để nhận ngay thông báo và tin tức mới nhất từ chúng tôi
                </span>
                <div className="flex items-center gap-l gap-s">
                  {icons.map((icon, index) => (
                    <SubmitButton
                      key={index}
                      isDirty={true}
                      text="Label"
                      size="medium"
                      color="secondary"
                      isSubmitting={false}
                      iconPosition="only"
                      isPill={true}
                      icon={icon}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-l gap-s">
                  <Image src={'/assets/demo/qrcode.png'} width={100} height={100} alt="qr-code" />
                  <Image src={'/assets/demo/qrcode.png'} width={100} height={100} alt="qr-code" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center bg-greyscale-surface-subtle">
        <div className="container w-full max-w-[1440px]">
          <div className="flex gap-[120px] py-2xl">
            <span className="flex items-center body-regular">© 2023 TTK Global Ventures. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterNavList = ({ title, link, subnav, direction = 'column' }: FooterNavListProps) => {
  return (
    <Link
      href={link || ''}
      className={`flex ${direction == 'column' ? 'flex-col' : 'flex-row'} flex-wrap gap-s text-greyscale-negative no-underline ${link ? '' : 'pointer-events-none cursor-default'}`}
    >
      <span className="footnote-bold tablet:body-bold">{title}</span>
      {subnav?.map((nav, i) => {
        return (
          <Link
            href={nav.link || '#'}
            className={`link footnote-regular tablet:body-regular ${nav.link ? 'pointer-events-auto' : 'pointer-events-none cursor-default'}`}
          >
            {nav.title}
          </Link>
        );
      })}
    </Link>
  );
};

export default Footer;
