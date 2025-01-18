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
    description: (
      <>
        Brand A, chuyên về <span className="text-secondary-default body-bold"> thực phẩm bổ sung</span> vitamin và
        khoáng chất - Dự án ghi nhận mức tăng trưởng ấn tượng với doanh số hơn
        <span className="text-secondary-default body-bold"> 1 triệu USD</span> trong năm 2024 và trung bình hơn{' '}
        <span className="text-secondary-default body-bold">150,000 USD/tháng</span>, khẳng định năng lực của TTK trong
        việc hỗ trợ DN Việt bứt phá trên thị trường Amazon.
      </>
    ),
    tags: ['Brand A'],
    previousRevenue: '1,110,006.83 USD',
    postRevenue: '1,110,006.83 USD',
    image: casestudyImage
  },
  {
    id: 1,
    projectName: 'Ngách thức uống hòa tan',
    description: (
      <>
        Trong năm 2024, Brand B đạt doanh thu gần <span className="text-secondary-default body-bold">600,000 USD</span>{' '}
        (trung bình 70,000 USD/tháng) với <span className="text-secondary-default body-bold">cà phê hòa tan</span>.
        Chiến lược vận hành hiệu quả cùng hệ thống quảng cáo độc quyền của TTK đã giúp Brand B tăng trưởng vượt bậc trên
        thị trường cạnh tranh.
      </>
    ),
    tags: ['Finance', 'Innovation'],
    previousRevenue: '200 triệu VND',
    postRevenue: '567,722.65 USD',
    image: casestudyImage
  },
  {
    id: 2,
    projectName: 'Ngách thực phẩm',
    description: (
      <>
        TTK vận hành gian hàng Brand C - kinh doanh <span className="text-secondary-default body-bold">bánh tráng</span>{' '}
        và các sản phẩm <span className="text-secondary-default body-bold">thực phẩm khô đóng gói</span> trên Amazon.
        Trong vòng 1 năm, dự án đã đạt doanh thu hơn{' '}
        <span className="text-secondary-default body-bold">250,000 USD</span>, nhờ sự chuyên nghiệp và am hiểu thị
        trường của đội ngũ chuyên gia.
      </>
    ),
    tags: ['E-commerce', 'Growth'],
    previousRevenue: '300 triệu VND',
    postRevenue: '259,723.50 USD',
    image: casestudyImage
  }
];
const CaseStudy = () => {
  const description =
    'TTK Global Ventures đã và đang vận hành các gian hàng thuộc nhiều ngách sản phẩm khác nhau, mang về cho đối tác doanh thu ấn tượng.';
  return (
    <SectionCard isPaddingContent title={<CaseStudyTitle />} description={description} customClass="">
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
              slidesPerView: 1.4
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
