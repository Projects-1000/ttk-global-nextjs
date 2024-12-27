'use client';
import { FacebookOutlined, Google, Instagram } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import SubmitButton from '../Button/Button';
import './index.scss';
const icons = [<FacebookOutlined key={1} />, <Google key={2} />, <Instagram key={3} />];
const Footer = () => {
  return (
    <div className="footer-container flex flex-col overflow-hidden">
      <div className="flex flex-col gap-4xl bg-blue-600 px-[120px] py-[60px]">
        <Image
          src="https://res.cloudinary.com/dh6bfx865/image/upload/v1735060367/ttk-global/Logo_gsse3o.png"
          alt="logo"
          className="w-fit object-cover"
          width={243}
          height={64}
        />
        <div className="flex justify-between">
          <div className="flex gap-[60px] text-greyscale-negative">
            <div className="flex w-2/3 max-w-[360px] flex-col gap-3xl">
              <span className="body-regular">
                Nhà phát triển Thương mại điện tử Quốc tế - Đơn vị trung gian hàng đầu tại Việt Nam cung cấp các giải
                pháp giúp doanh nghiệp Việt bán hàng xuyên biên giới.
              </span>
              <div className="flex flex-col">
                <span className="body-bold">Chi nhánh HCM:</span>
                <Link href={'#'} className="link body-regular">
                  26 Đường 51-BTT, Bình Trưng Tây, Quận 2, Thủ Đức
                </Link>
              </div>
              <div className="flex flex-col">
                <span className="body-bold">Chi nhánh US:</span>
                <Link href={'#'} className="link body-regular">
                  30 N Gould St Ste R Sheridan, Wyoming 82801
                </Link>
              </div>
              <div className="flex items-center gap-[6px]">
                <span className="body-bold">Email: </span>
                <Link href={'#'} className="link body-regular">
                  contact@ttkglobalventures.com
                </Link>
              </div>
              <div className="flex items-center gap-xs">
                <span className="body-bold">Phone: </span>
                <Link href={'#'} className="link body-regular">
                  055 907 5545
                </Link>
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-8">
              <span className="body-bold">Danh mục</span>
              <div className="flex flex-col gap-4">
                <span className="body-bold">Trang chủ</span>
                <Link href={'#'} className="link body-regular">
                  Mô hình hợp tác
                </Link>
                <Link href={'#'} className="link body-regular">
                  Đối tác
                </Link>
                <Link href={'#'} className="link body-regular">
                  Blog
                </Link>
                <Link href={'#'} className="link body-regular">
                  Liên hệ
                </Link>
                <Link href={'#'} className="link body-regular">
                  Tài liệu
                </Link>
              </div>
            </div>
          </div>
          <div className="flex max-w-[360px] flex-col gap-xl text-greyscale-negative">
            <span className="body-bold">Theo dõi chúng tôi</span>
            <div className="flex items-center gap-[12px] bg-white p-[12px]">
              <input className="flex-1 border-none outline-none body-regular" placeholder="Email" />
              {/* <Button variant="contained" className="bg-primary-default">
                Gửi
              </Button> */}
              <SubmitButton
                isDirty={true}
                text="Gửi"
                size="small"
                color="primary"
                classCustom="!body-regular"
                isSubmitting={false}
              />
            </div>
            <span className="body-regular">
              Đăng ký để nhận ngay thông báo và tin tức mới nhất từ chúng tôiTài liệu
            </span>
            <div className="flex items-center gap-l">
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
            <div className="flex items-center gap-l">
              <Image src={'/assets/demo/qrcode.png'} width={100} height={100} alt="qr-code" />
              <Image src={'/assets/demo/qrcode.png'} width={100} height={100} alt="qr-code" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[120px] bg-greyscale-surface-subtle px-[120px] py-2xl">
        <span className="flex items-center body-regular">© 2023 TTK Global Ventures. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
