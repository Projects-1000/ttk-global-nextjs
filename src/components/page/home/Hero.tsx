'use client';
// import { BlueVector } from '@/assets/blue-vector';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Button from '@/components/ui/Button/Button';
const listLogos = [
  {
    src: 'https://res.cloudinary.com/dh6bfx865/image/upload/v1735102949/ttk-global/logo-shopbase_1_mnd9il.png',
    alt: 'shopbase',
    width: 213,
    height: 40
  },
  {
    src: 'https://res.cloudinary.com/dh6bfx865/image/upload/v1735102949/ttk-global/Payoneer-Logo_1_kdrmaf.png',
    alt: 'payoneer',
    width: 108,
    height: 40
  },
  {
    src: 'https://res.cloudinary.com/dh6bfx865/image/upload/v1735102949/ttk-global/burgerprints_2_urwqde.png',
    alt: 'burgerprints',
    width: 253,
    height: 40
  },
  {
    src: 'https://res.cloudinary.com/dh6bfx865/image/upload/v1735102949/ttk-global/Logo_AGS_1_cfmys9.png',
    alt: 'ags',
    width: 149,
    height: 40
  },
  {
    src: 'https://res.cloudinary.com/dh6bfx865/image/upload/v1735102949/ttk-global/logo-shopbase_1_mnd9il.png',
    alt: 'shopbase',
    width: 213,
    height: 40
  },
  {
    src: 'https://res.cloudinary.com/dh6bfx865/image/upload/v1735102949/ttk-global/Payoneer-Logo_1_kdrmaf.png',
    alt: 'payoneer',
    width: 108,
    height: 40
  },
  {
    src: 'https://res.cloudinary.com/dh6bfx865/image/upload/v1735102949/ttk-global/burgerprints_2_urwqde.png',
    alt: 'burgerprints',
    width: 253,
    height: 40
  },
  {
    src: 'https://res.cloudinary.com/dh6bfx865/image/upload/v1735102949/ttk-global/Logo_AGS_1_cfmys9.png',
    alt: 'ags',
    width: 149,
    height: 40
  }
];
const Hero = () => {
  return (
    <div className="relative flex flex-col gap-4xl py-[120px]">
      {/* <div className="absolute left-[-67%] top-[-40%] z-0 rotate-180">
        <BlueVector />
      </div> */}
      <div className="z-10 flex items-center justify-between px-[120px]">
        <div className="flex max-w-[600px] flex-col gap-2xl">
          <p className="h1-bold">
            Hợp tác kinh doanh trên <span className="text-[#F58C29]">Amazon</span> - Đưa thương hiệu của bạn ra toàn
            cầu!
          </p>
          <p className="headline-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dignissim nibh. Pellentesque habitant morbi
            tristique senectus
          </p>
          <div className="flex items-center gap-l">
            <Button text="Đăng ký hợp tác" size="medium" />
            <Button text="Tìm hiểu thêm" color="secondary" size="medium" />
          </div>
        </div>
        <div className="min-h-[380px] min-w-[480px]">
          <Image
            src={'https://res.cloudinary.com/dh6bfx865/image/upload/v1735102626/ttk-global/HeroImage_dobhqx.png'}
            alt="Hero logo"
            width={480}
            height={380}
          />
        </div>
      </div>
      <div className="z-10 flex flex-col items-center gap-2xl px-0 py-3xl">
        <p className="body-bold">Các đơn vị hỗ trợ</p>
        <div className="max-w-[100vw]">
          <Swiper
            modules={[Autoplay]} // Add Autoplay module
            slidesPerView={5}
            spaceBetween={20}
            loop
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              stopOnLastSlide: false
            }}
            speed={3000}
            className="swiper-infinity-slider"
          >
            {listLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
