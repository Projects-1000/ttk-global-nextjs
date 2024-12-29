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

const Hero = () => {
  return (
    <section className="relative flex w-full flex-col gap-4xl mobile:py-mobile_section_padding laptop:py-desktop_section_padding">
      {/* <div className="absolute left-[-67%] top-[-40%] z-0 rotate-180">
        <BlueVector />
      </div> */}
      <motion.div
        className="flex items-center justify-between mobile:flex-col mobile:items-center mobile:gap-3xl tablet:flex-row"
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        <div className="flex max-w-[600px] flex-col gap-2xl mobile:items-center mobile:gap-y-3xl">
          <motion.p className="h3-bold tablet:h2-bold laptop:h1-bold" variants={itemVariants}>
            Hợp tác kinh doanh trên <span className="text-[#F58C29]">Amazon</span> - Đưa thương hiệu của bạn ra toàn
            cầu!
          </motion.p>
          <motion.p className="headline-regular mobile:caption-regular" variants={itemVariants}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dignissim nibh. Pellentesque habitant morbi
            tristique senectus
          </motion.p>
          <motion.div className="flex items-center gap-l" variants={itemVariants}>
            <Button text="Đăng ký hợp tác" size="medium" />
            <Button text="Tìm hiểu thêm" color="secondary" size="medium" />
          </motion.div>
        </div>

        <motion.div className="max-h-[380px] max-w-[480px] mobile:h-auto mobile:w-full" variants={imageVariants}>
          <Image
            src="https://res.cloudinary.com/dh6bfx865/image/upload/v1735102626/ttk-global/HeroImage_dobhqx.png"
            alt="Hero logo"
            width={480}
            height={380}
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-col items-center gap-2xl px-0 py-3xl"
        initial="hidden"
        animate="visible"
        variants={logosVariants}
      >
        <motion.p variants={itemVariants} className="body-bold">
          Các đơn vị hỗ trợ
        </motion.p>
        {/* <div className="max-w-[100vw] mobile:overflow-hidden">
          <Swiper
            modules={[Autoplay]}
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
            {[...listLogos, ...listLogos].map((logo, index) => (
              <SwiperSlide key={index}>
                <motion.div className="flex items-center justify-center" variants={itemVariants}>
                  <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
      </motion.div>
    </section>
  );
};

export default Hero;
