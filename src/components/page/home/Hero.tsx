'use client';
import { BlueVector } from '@/assets/blue-vector';
import SubmitButton from '@/components/ui/Button';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
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
      <div className="absolute left-[-67%] top-[-40%] z-0 rotate-180">
        <BlueVector />
      </div>
      <div className="z-10 flex items-center justify-between px-[120px]">
        <div className="flex max-w-[600px] flex-col gap-2xl">
          <div className="h1-bold">
            Hợp tác kinh doanh trên <span className="text-[#F58C29]">Amazon</span> - Đưa thương hiệu của bạn ra toàn
            cầu!
          </div>
          <span className="headline-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dignissim nibh. Pellentesque habitant morbi
            tristique senectus
          </span>
          <div className="flex items-center gap-l">
            <SubmitButton text="Đăng ký hợp tác" size="medium" />
            <SubmitButton text="Tìm hiểu thêm" color="secondary" size="medium" />
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
        <span className="body-bold">Các đơn vị hỗ trợ</span>
        {/* <div className="flex w-full items-center justify-between">
          <Image
            src={'https://res.cloudinary.com/dh6bfx865/image/upload/v1735102949/ttk-global/logo-shopbase_1_mnd9il.png'}
            alt="shopbase"
            className="h-fit w-fit object-cover"
            width={213}
            height={40}
          />
          <Image
            src={'https://res.cloudinary.com/dh6bfx865/image/upload/v1735102949/ttk-global/Payoneer-Logo_1_kdrmaf.png'}
            alt="payoneer"
            className="h-fit w-fit object-cover"
            width={108}
            height={40}
          />
          <Image
            src={'https://res.cloudinary.com/dh6bfx865/image/upload/v1735102949/ttk-global/burgerprints_2_urwqde.png'}
            alt="burgerprints"
            className="h-fit w-fit object-cover"
            width={253}
            height={40}
          />
          <Image
            src={'https://res.cloudinary.com/dh6bfx865/image/upload/v1735102949/ttk-global/Logo_AGS_1_cfmys9.png'}
            alt="shopbase"
            className="h-fit w-fit object-cover"
            width={149}
            height={40}
          />
          <Image
            src={'https://res.cloudinary.com/dh6bfx865/image/upload/v1735102949/ttk-global/burgerprints_2_urwqde.png'}
            alt="burgerprints"
            className="h-fit w-fit object-cover"
            width={253}
            height={40}
          />
        </div> */}
        {/* <CustomSwiper<ImageProps>
          Card={({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) => (
            <Image src={src} alt={alt} width={width} height={height} />
          )}
          listData={listLogos}
          slidesPerView={3} // Adjust as necessary
          spaceBetween={20}
          loop
          autoPlay={3000} // Optional autoplay
          dots={true}
          centeredSlides={true}
        /> */}
        <div className="w-full">
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
            speed={1500}
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
