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
    <section className="mobile:py-mobile_section_padding relative flex w-full flex-col gap-4xl laptop:py-desktop_section_padding">
      {/* <div className="absolute left-[-67%] top-[-40%] z-0 rotate-180">
        <BlueVector />
      </div> */}
      <div className="flex items-center justify-between mobile:flex-col mobile:items-center mobile:gap-3xl tablet:flex-row">
        <div className="flex max-w-[600px] flex-col gap-2xl mobile:items-center mobile:gap-y-3xl">
          <p className="h1-bold mobile:h3-bold">
            Hợp tác kinh doanh trên <span className="text-[#F58C29]">Amazon</span> - Đưa thương hiệu của bạn ra toàn
            cầu!
          </p>
          <p className="headline-regular mobile:caption-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dignissim nibh. Pellentesque habitant morbi
            tristique senectus
          </p>
          <div className="flex items-center gap-l">
            <Button text="Đăng ký hợp tác" size="medium" />
            <Button text="Tìm hiểu thêm" color="secondary" size="medium" />
          </div>
        </div>
        <Image
          className="max-h-[380px] max-w-[480px] mobile:h-auto mobile:w-full"
          src={'https://res.cloudinary.com/dh6bfx865/image/upload/v1735102626/ttk-global/HeroImage_dobhqx.png'}
          alt="Hero logo"
          width={480}
          height={380}
        />
      </div>
      <div className="flex flex-col items-center gap-2xl px-0 py-3xl">
        <p className="body-bold">Các đơn vị hỗ trợ</p>
        <div className="max-w-[100vw] mobile:overflow-hidden">
          {/* <Swiper
            modules={[Autoplay]} // Add Autoplay module
            slidesPerView={5}
            spaceBetween={20}
            loop
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              stopOnLastSlide: false
            }}
            speed={1500}
            breakpoints={{
              375: {
                slidesPerView: 3
              },
              768: {
                slidesPerView: 4
              },
              1024: {
                slidesPerView: 5
              }
            }}
          >
            {listLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
              </SwiperSlide>
            ))}
          </Swiper> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
