'use client';
import CaseStudyCard from '@/components/ui/Card/CaseStudyCard';
import SectionCard from '@/components/ui/Card/SectionCard';
import { SwiperSlide } from 'swiper/react';
// import 'swiper/css/navigation';
import { BlueVector } from '@/assets/BlueVector';
import { TtkFrame } from '@/assets/TtkFrame';
import CustomSwiper from '@/components/ui/CustomSwiper';
import { motion } from 'framer-motion';
import { logosVariants } from '../Hero/HeroAnimationVariants';
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

        <CustomSwiper
          navigation
          slidesPerView={1}
          breakpoints={{
            375: {
              spaceBetween: 16,
              slidesPerView: 1.2
            },
            768: {
              spaceBetween: 16,
              slidesPerView: 1
            },
            1024: {
              spaceBetween: 16,
              slidesPerView: 1
            }
          }}
          spaceBetween={30}
          wrapperClass="desktop:w-[calc(100%-160px)] desktop:max-w-[1440px] "
        >
          {caseStudyData.map((caseStudy) => (
            <SwiperSlide className="w-full flex-auto" key={caseStudy.id}>
              <CaseStudyCard
                image={caseStudy.image}
                projectName={caseStudy.projectName}
                description={caseStudy.description}
                tags={caseStudy.tags}
                postRevenue={caseStudy.postRevenue}
              />
            </SwiperSlide>
          ))}
        </CustomSwiper>
        {/* <div className="inline-block w-full">
          <CustomSwiper
            allowTouchMove={false}
            spaceBetween={50}
            direction="horizontal"
            breakpoints={{
              375: {
                spaceBetween: 16,
                slidesPerView: 1.2
              },
              768: {
                spaceBetween: 16,
                slidesPerView: 1
              },
              1024: {
                spaceBetween: 16,
                slidesPerView: 1
              }
            }}
          >
            {caseStudyData.map((caseStudy, index) => (
              <SwiperSlide key={index}>
                <CaseStudyCard
                  image={caseStudy.image}
                  projectName={caseStudy.projectName}
                  description={caseStudy.description}
                  tags={caseStudy.tags}
                  postRevenue={caseStudy.postRevenue}
                />
              </SwiperSlide>
            ))}
          </CustomSwiper>
        </div> */}
      </motion.div>
    </SectionCard>
  );
};

const CaseStudyTitle = () => {
  return <p className="text-secondary-label">CASE STUDY</p>;
};

export default CaseStudy;
