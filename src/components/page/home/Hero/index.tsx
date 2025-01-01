'use client';
// import { BlueVector } from '@/assets/blue-vector';

import Button from '@/components/ui/Button/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { containerVariants, imageVariants, itemVariants, logosVariants } from './HeroAnimationVariants';
import listLogos from './fakeData';
import { BlueVector } from '@/assets/BlueVector';
import CustomSwiper from '@/components/ui/CustomSwiper';

const Hero = () => {
  return (
    <section className="container relative flex w-full flex-col gap-4xl py-mobile_section_padding laptop:py-desktop_section_padding">
      <div className="absolute left-0 top-[0] -z-10 translate-x-[-70%] translate-y-[-35%] rotate-180">
        <BlueVector />
      </div>
      <motion.div
        className="flex flex-col items-center justify-between mobile:gap-3xl tablet:flex-row"
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        <div className="order-2 flex flex-col items-start justify-start gap-y-3xl tablet:order-1 tablet:flex-auto tablet:gap-2xl">
          <motion.p className="h3-bold tablet:h3-bold laptop:h1-bold" variants={itemVariants}>
            Hợp tác kinh doanh trên <span className="text-[#F58C29]">Amazon</span> - Đưa thương hiệu của bạn ra toàn
            cầu!
          </motion.p>
          <motion.p className="headline-regular mobile:caption-regular" variants={itemVariants}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dignissim nibh. Pellentesque habitant morbi
            tristique senectus
          </motion.p>
          <motion.div
            className="flex w-full items-center justify-center gap-l tablet:justify-start"
            variants={itemVariants}
          >
            <Button text="Đăng ký hợp tác" classCustom="flex-1 tablet:flex-none" />
            <Button text="Tìm hiểu thêm" color="secondary" classCustom="flex-1 tablet:flex-none" />
          </motion.div>
        </div>

        <motion.div
          className="order-1 flex h-fit w-full min-w-[360px] justify-center tablet:order-2 tablet:h-auto tablet:min-w-[480px] laptop:min-w-[50%]"
          variants={imageVariants}
        >
          <Image
            src="/assets/demo/HeroImage.png"
            alt="Hero logo"
            width={629}
            height={552}
            className="object h-fit w-full object-contain"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-col items-center gap-l px-0 py-l laptop:gap-2xl laptop:py-3xl"
        initial="hidden"
        animate="visible"
        variants={logosVariants}
      >
        <motion.p variants={itemVariants} className="body-bold">
          Các đơn vị hỗ trợ
        </motion.p>
        <div className="">
          <CustomSwiper
            navigation={false}
            slidesPerView={5}
            spaceBetween={20}
            allowTouchMove={false}
            loop
            isAutoplay={true}
            speed={1500}
            isFullWidth={true}
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
            className="swiper-infinity-slider"
          >
            {[...listLogos, ...listLogos].map((logo, index) => (
              <SwiperSlide key={index}>
                <motion.div className="flex w-full items-center justify-center" variants={itemVariants}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain object-center"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </CustomSwiper>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
