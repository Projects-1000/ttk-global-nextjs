'use client';
import CaseStudyCard from '@/components/ui/Card/CaseStudyCard';
import SectionCard from '@/components/ui/Card/SectionCard';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { logosVariants } from '../Hero/HeroAnimationVariants';
import { TtkFrame } from '@/assets/TtkFrame';
import { BlueVector } from '@/assets/BlueVector';
const caseStudyData = [
  {
    id: 0,
    projectName: 'Ngách thực phẩm bổ sung',
    description:
      'Brand A, chuyên về thực phẩm bổ sung vitamin và khoáng chất - Dự án ghi nhận mức tăng trưởng ấn tượng với doanh số hơn 1 triệu USD trong năm 2024 và trung bình hơn 150,000 USD/tháng, khẳng định năng lực của TTK trong việc hỗ trợ DN Việt bứt phá trên thị trường Amazon.',
    tags: ['Brand A'],
    previousRevenue: '1,110,006.83 USD',
    postRevenue: 'Doanh thu trong năm 2024:  1,110,006.83 USD',
    image:
      'https://res.cloudinary.com/dh6bfx865/image/upload/v1735057043/ttk-global/carousel-so-lieu-20241128045841-ernrx_1_dvf0dm.png'
  },
  {
    id: 1,
    projectName: 'Dự án 2',
    description: 'Mô tả ngắn gọn về dự án 2.',
    tags: ['Finance', 'Innovation'],
    previousRevenue: '200 triệu VND',
    postRevenue: '700 triệu VND',
    image:
      'https://res.cloudinary.com/dh6bfx865/image/upload/v1735057043/ttk-global/carousel-so-lieu-20241128045841-ernrx_1_dvf0dm.png'
  },
  {
    id: 2,
    projectName: 'Dự án 3',
    description: 'Mô tả ngắn gọn về dự án 3.',
    tags: ['E-commerce', 'Growth'],
    previousRevenue: '300 triệu VND',
    postRevenue: '1 tỷ VND',
    image:
      'https://res.cloudinary.com/dh6bfx865/image/upload/v1735057043/ttk-global/carousel-so-lieu-20241128045841-ernrx_1_dvf0dm.png'
  }
  // {
  //   id: 3,
  //   projectName: 'Dự án 3',
  //   description: 'Mô tả ngắn gọn về dự án 3.',
  //   tags: ['E-commerce', 'Growth'],
  //   previousRevenue: '300 triệu VND',
  //   postRevenue: '1 tỷ VND',
  //   image:
  //     'https://res.cloudinary.com/dh6bfx865/image/upload/v1735057043/ttk-global/carousel-so-lieu-20241128045841-ernrx_1_dvf0dm.png'
  // },
  // {
  //   id: 4,
  //   projectName: 'Dự án 3',
  //   description: 'Mô tả ngắn gọn về dự án 3.',
  //   tags: ['E-commerce', 'Growth'],
  //   previousRevenue: '300 triệu VND',
  //   postRevenue: '1 tỷ VND',
  //   image:
  //     'https://res.cloudinary.com/dh6bfx865/image/upload/v1735057043/ttk-global/carousel-so-lieu-20241128045841-ernrx_1_dvf0dm.png'
  // }
];
const CaseStudy = () => {
  const description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dignissim nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';
  return (
    <SectionCard title={<CaseStudyTitle />} description={description}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={logosVariants}
        viewport={{ once: true, amount: 0.8 }}
        className="relative flex w-full items-center mobile:gap-0 laptop:gap-10"
      >
        <div className="absolute left-0 top-[0] -z-10 translate-x-[-40%] translate-y-[-20%]">
          <TtkFrame />
        </div>
        <div className="absolute right-0 top-[0] -z-10 translate-x-[40%] translate-y-[-40%]">
          <BlueVector />
        </div>
        <div className="prev-button border-primary z-10 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-solid text-greyscale-border-default duration-200 hover:bg-primary-default hover:text-white active:bg-primary-darker active:text-white">
          <ChevronLeft size={24} />
        </div>
        <div className="w-full max-w-[1120px]">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            breakpoints={{
              375: {
                spaceBetween: 16,
                slidesPerView: 1.2
              },
              768: {
                spaceBetween: 0,
                slidesPerView: 1
              }
            }}
            spaceBetween={30}
            className="relative"
            navigation={{
              nextEl: '.next-button',
              prevEl: '.prev-button'
            }}
            loop={true}
          >
            {caseStudyData.map((caseStudy) => (
              <SwiperSlide className="w-full" key={caseStudy.id}>
                <CaseStudyCard
                  image={caseStudy.image}
                  projectName={caseStudy.projectName}
                  description={caseStudy.description}
                  tags={caseStudy.tags}
                  postRevenue={caseStudy.postRevenue}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="next-button border-primary z-10 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-solid text-greyscale-border-default duration-200 hover:bg-primary-default hover:text-white active:bg-primary-darker active:text-white">
          <ChevronRight size={24} />
        </div>
      </motion.div>
    </SectionCard>
  );
};

const CaseStudyTitle = () => {
  return <p className="text-secondary-label">CASE STUDY</p>;
};

export default CaseStudy;
