'use client';
import CaseStudyCard from '@/components/ui/Card/CaseStudyCard';
import SectionCard from '@/components/ui/Card/SectionCard';
import { SwiperSlide } from 'swiper/react';
// import 'swiper/css/navigation';
import blueVector from '@/assets/blue-vector.png';
import { TtkFrame } from '@/assets/TtkFrame';
import CustomSwiper from '@/components/ui/CustomSwiper';
import { motion } from 'framer-motion';
import { logosVariants } from '../Hero/HeroAnimationVariants';
import casestudyImage from '@/assets/casestudy/carousel-so-lieu.png';
import Image from 'next/image';
const caseStudyData = [
  {
    id: 0,
    projectName: 'Ngách thực phẩm bổ sung',
    description:
      'Brand A, chuyên về thực phẩm bổ sung vitamin và khoáng chất - Dự án ghi nhận mức tăng trưởng ấn tượng với doanh số hơn 1 triệu USD trong năm 2024 và trung bình hơn 150,000 USD/tháng, khẳng định năng lực của TTK trong việc hỗ trợ DN Việt bứt phá trên thị trường Amazon.',
    tags: ['Brand A'],
    previousRevenue: '1,110,006.83 USD',
    postRevenue: 'Doanh thu trong năm 2024:  1,110,006.83 USD',
    image: casestudyImage
  },
  {
    id: 1,
    projectName: 'Ngách thực phẩm bổ sung',
    description:
      'Brand A, chuyên về thực phẩm bổ sung vitamin và khoáng chất - Dự án ghi nhận mức tăng trưởng ấn tượng với doanh số hơn 1 triệu USD trong năm 2024 và trung bình hơn 150,000 USD/tháng, khẳng định năng lực của TTK trong việc hỗ trợ DN Việt bứt phá trên thị trường Amazon.',
    tags: ['Finance', 'Innovation'],
    previousRevenue: '200 triệu VND',
    postRevenue: '700 triệu VND',
    image: casestudyImage
  },
  {
    id: 2,
    projectName: 'Ngách thực phẩm bổ sung',
    description:
      'Brand A, chuyên về thực phẩm bổ sung vitamin và khoáng chất - Dự án ghi nhận mức tăng trưởng ấn tượng với doanh số hơn 1 triệu USD trong năm 2024 và trung bình hơn 150,000 USD/tháng, khẳng định năng lực của TTK trong việc hỗ trợ DN Việt bứt phá trên thị trường Amazon.',
    tags: ['E-commerce', 'Growth'],
    previousRevenue: '300 triệu VND',
    postRevenue: '1 tỷ VND',
    image: casestudyImage
  }
  // {
  //   id: 3,
  //   projectName: 'Dự án 3',
  //   description: 'Mô tả ngắn gọn về dự án 3.',
  //   tags: ['E-commerce', 'Growth'],
  //   previousRevenue: '300 triệu VND',
  //   postRevenue: '1 tỷ VND',
  //   image:
  //     casestudyImage
  // },
  // {
  //   id: 4,
  //   projectName: 'Dự án 3',
  //   description: 'Mô tả ngắn gọn về dự án 3.',
  //   tags: ['E-commerce', 'Growth'],
  //   previousRevenue: '300 triệu VND',
  //   postRevenue: '1 tỷ VND',
  //   image:
  //     casestudyImage
  // }
];
const CaseStudy = () => {
  const description =
    'TTK Global Ventures đã và đang vận hành các gian hàng thuộc nhiều ngách sản phẩm khác nhau, mang về cho đối tác doanh thu ấn tượng.';
  return (
    <SectionCard isPaddingContent title={<CaseStudyTitle />} description={description} customClass=''>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={logosVariants}
        viewport={{ once: true, amount: 0.8 }}
        className="relative flex w-full items-center mobile:gap-0 laptop:gap-10"
      >
        <div className="absolute bottom-[0] left-0 -z-10 translate-x-[-50%] translate-y-[70%] scale-[0.6] opacity-20">
          <TtkFrame />
        </div>
        <div className="absolute right-0 top-[0] -z-10 translate-x-[60%] translate-y-[-40%] opacity-40">
          <Image src={blueVector} alt="" width={0} height={0} sizes="100vw" className="w-full object-contain" />
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
              slidesPerView: 1.2
            },
            1024: {
              spaceBetween: 16,
              slidesPerView: 1
            }
          }}
          spaceBetween={30}
          wrapperClass="desktop:w-[calc(100%-160px)] laptop:w-[calc(100%-60px)] desktop:max-w-[1440px] container"
        >
          {caseStudyData.map((caseStudy) => (
            <SwiperSlide className="min-h-full w-full" key={caseStudy.id}>
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
      </motion.div>
    </SectionCard>
  );
};

const CaseStudyTitle = () => {
  return <p className="text-secondary-label">CASE STUDY</p>;
};

export default CaseStudy;
