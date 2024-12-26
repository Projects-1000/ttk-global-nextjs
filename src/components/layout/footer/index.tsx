'use client';
import { FacebookOutlined, Google, Instagram } from '@mui/icons-material';
import Image from 'next/image';
import SubmitButton from '../../ui/Button/Button';
import Link from 'next/link';
import './index.scss';
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
            <div className="flex w-2/3 max-w-[360px] flex-col gap-8">
              <span className="body-regular">
                Nhà phát triển Thương mại điện tử Quốc tế - Đơn vị trung gian hàng đầu tại Việt Nam cung cấp các giải
                pháp giúp doanh nghiệp Việt bán hàng xuyên biên giới.
              </span>
              <div className="flex flex-col">
                <span className="body-bold">Chi nhánh HCM:</span>
                <Link href={'#'} className="body-regular link">
                  26 Đường 51-BTT, Bình Trưng Tây, Quận 2, Thủ Đức
                </Link>
              </div>
              <div className="flex flex-col">
                <span className="body-bold">Chi nhánh US:</span>
                <Link href={'#'} className="body-regular link">
                  30 N Gould St Ste R Sheridan, Wyoming 82801
                </Link>
              </div>
              <div className="flex items-center gap-[6px]">
                <span className="body-bold">Email: </span>
                <Link href={'#'} className="body-regular link">
                  contact@ttkglobalventures.com
                </Link>
              </div>
              <div className="flex items-center gap-xs">
                <span className="body-bold">Phone: </span>
                <Link href={'#'} className="body-regular link">
                  055 907 5545
                </Link>
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-8">
              <span className="body-bold">Danh mục</span>
              <div className="flex flex-col gap-4">
                <span className="body-bold">Trang chủ</span>
                <Link href={'#'} className="body-regular link">
                  Mô hình hợp tác
                </Link>
                <Link href={'#'} className="body-regular link">
                  Đối tác
                </Link>
                <Link href={'#'} className="body-regular link">
                  Blog
                </Link>
                <Link href={'#'} className="body-regular link">
                  Liên hệ
                </Link>
                <Link href={'#'} className="body-regular link">
                  Tài liệu
                </Link>
              </div>
            </div>
          </div>
          <div className="flex max-w-[360px] flex-col gap-xl text-greyscale-negative">
            <span className="body-bold">Theo dõi chúng tôi</span>
            <div className="flex items-center gap-[12px] bg-white p-[12px]">
              <input className="body-regular flex-1 border-none outline-none" placeholder="Email" />
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
          </div>
        </div>
      </div>
      <div className="flex gap-[120px] bg-greyscale-surface-subtle px-[120px] py-2xl">
        <div className="flex items-center gap-l">
          <SubmitButton
            isDirty={true}
            text="Label"
            size="medium"
            color="primary"
            isSubmitting={false}
            iconPosition="only"
            isPill={true}
            icon={<Instagram />}
          />
          <SubmitButton
            isDirty={true}
            text="Label"
            size="medium"
            color="primary"
            isSubmitting={false}
            iconPosition="only"
            isPill={true}
            icon={<FacebookOutlined />}
          />
          <SubmitButton
            isDirty={true}
            text="Label"
            size="medium"
            color="primary"
            isSubmitting={false}
            iconPosition="only"
            isPill={true}
            icon={<Google />}
          />
        </div>
        <span className="body-regular flex items-center">© 2023 TTK Global Ventures. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
