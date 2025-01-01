'use client';
import { FacebookOutlined, Google, Instagram } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import SubmitButton from '../../Button/Button';
import './index.scss';
const icons = [<FacebookOutlined key={1} className="" />, <Google key={2} />, <Instagram key={3} />];
const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center bg-blue-600">
      <div className="container w-full max-w-[1440px] mobile:py-mobile_section_padding">
        <div className="footer-container flex flex-col overflow-hidden">
          <div className="flex flex-col gap-4xl">
            <Image
              src="https://res.cloudinary.com/dh6bfx865/image/upload/v1735060367/ttk-global/Logo_gsse3o.png"
              alt="logo"
              className="w-fit object-cover"
              width={243}
              height={64}
            />
            <div className="flex justify-between mobile:flex-col mobile:gap-3xl tablet:flex-row">
              <div className="flex text-greyscale-negative mobile:w-full mobile:gap-l laptop:gap-[60px]">
                <div className="flex w-2/3 max-w-[360px] flex-col mobile:gap-l laptop:gap-3xl">
                  <span className="mobile:footnote-regular tablet:body-regular">
                    Nhà phát triển Thương mại điện tử Quốc tế - Đơn vị trung gian hàng đầu tại Việt Nam cung cấp các
                    giải pháp giúp doanh nghiệp Việt bán hàng xuyên biên giới.
                  </span>
                  <div className="flex flex-col">
                    <span className="mobile:footnote-bold tablet:body-bold">Chi nhánh HCM:</span>
                    <Link href={'#'} className="link mobile:footnote-regular tablet:body-regular">
                      26 Đường 51-BTT, Bình Trưng Tây, Quận 2, Thủ Đức
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <span className="mobile:footnote-bold tablet:body-bold">Chi nhánh US:</span>
                    <Link href={'#'} className="link mobile:footnote-regular tablet:body-regular">
                      30 N Gould St Ste R Sheridan, Wyoming 82801
                    </Link>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <span className="mobile:footnote-bold tablet:body-bold">Email: </span>
                    <Link href={'#'} className="link text-wrap mobile:footnote-regular tablet:body-regular">
                      contact@ttkglobalventures.com
                    </Link>
                  </div>
                  <div className="flex items-center gap-xs">
                    <span className="mobile:footnote-bold tablet:body-bold">Phone: </span>
                    <Link href={'#'} className="link mobile:footnote-regular tablet:body-regular">
                      055 907 5545
                    </Link>
                  </div>
                </div>
                <div className="flex w-1/3 flex-col mobile:gap-l laptop:gap-3xl">
                  <span className="mobile:footnote-bold tablet:body-bold">Danh mục</span>
                  <div className="flex flex-col mobile:gap-s laptop:gap-3xl">
                    <span className="mobile:footnote-bold tablet:body-bold">Trang chủ</span>
                    <Link href={'#'} className="link mobile:footnote-regular tablet:body-regular">
                      Mô hình hợp tác
                    </Link>
                    <Link href={'#'} className="link mobile:footnote-regular tablet:body-regular">
                      Đối tác
                    </Link>
                    <Link href={'#'} className="link mobile:footnote-regular tablet:body-regular">
                      Blog
                    </Link>
                    <Link href={'#'} className="link mobile:footnote-regular tablet:body-regular">
                      Liên hệ
                    </Link>
                    <Link href={'#'} className="link mobile:footnote-regular tablet:body-regular">
                      Tài liệu
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-m text-greyscale-negative mobile:w-full mobile:gap-l laptop:max-w-[360px] laptop:gap-3xl">
                <span className="mobile:footnote-bold tablet:body-bold">Theo dõi chúng tôi</span>
                <div className="flex items-center gap-[12px] bg-white p-[12px]">
                  <input
                    className="flex-1 border-none outline-none mobile:footnote-regular tablet:body-regular"
                    placeholder="Email"
                  />

                  <SubmitButton
                    isDirty={true}
                    text="Gửi"
                    size="small"
                    color="primary"
                    classCustom="!body-regular"
                    isSubmitting={false}
                  />
                </div>
                <span className="mobile:footnote-bold tablet:body-bold">
                  Đăng ký để nhận ngay thông báo và tin tức mới nhất từ chúng tôi
                </span>
                <div className="flex items-center gap-l mobile:gap-s">
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
                <div className="flex items-center gap-l mobile:gap-s">
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

export default Footer;
