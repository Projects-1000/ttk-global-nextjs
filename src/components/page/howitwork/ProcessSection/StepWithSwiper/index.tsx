'use client';
import '@/styles/scss/_helper.scss';
import CustomSwiper from '@/components/ui/CustomSwiper';
import { Stepper, Step, StepLabel } from '@mui/material';
import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import carouselImage from '@/assets/howitwork/carousel-so-lieu.png';
import Image from 'next/image';
import './index.scss';
const steps = [
  'Đăng ký hợp tác',
  'Đánh giá và xây dựng kế hoạch kinh doanh',
  'Vận hành gian hàng Amazon',
  'Theo dõi và chia sẻ lợi nhuận'
];
const stepSlides = [
  {
    description:
      'Doanh nghiệp (DN) / Nhà đầu tư (NĐT) đăng ký tư vấn và cung cấp thông tin về doanh nghiệp và sản phẩm của mình (nếu có).',
    image: carouselImage
  },
  {
    description: 'DN/NĐT sẽ được cập nhật thường xuyên về đơn hàng, P&L (Báo cáo kết quả kinh doanh), được',
    image: carouselImage
  },
  {
    description: 'Content for step 3 goes here.',
    image: carouselImage
  },
  {
    description: 'Content for step 4 goes here.',
    image: carouselImage
  }
];
const SwiperWithStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="container-margin rounded-m border-[1px] border-blue-100 bg-white tablet:border-solid laptop:pb-4xl">
      <div className="mb-2xl rounded-m p-l mobile:max-tablet:border mobile:max-tablet:border-solid mobile:max-tablet:border-blue-100 laptop:mb-l laptop:px-xl laptop:py-2xl">
        <Stepper activeStep={activeStep} alternativeLabel className={`relative w-full`}>
          {steps.map((label, index) => (
            <Step key={label} className={`${activeStep !== index && 'mobile:max-tablet:hidden'}`}>
              <StepLabel>
                <span className={`text-sm font-medium ${activeStep === index ? 'text-blue-600' : 'text-gray-500'}`}>
                  {label}
                </span>
              </StepLabel>
            </Step>
          ))}
          <div className=""></div>
        </Stepper>
      </div>

      <CustomSwiper
        slidesPerView={1}
        navigation
        loop={false}
        onSlideChange={(swiper) => setActiveStep(swiper.activeIndex)}
        spaceBetween={100}
        wrapperClass="laptop:max-w-[700px]"
      >
        {stepSlides.map((step, index) => (
          <SwiperSlide virtualIndex={index} key={index}>
            <StepContent image={step.image} description={step.description} />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </div>
  );
};
interface StepContentProps {
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
}
const StepContent: React.FC<StepContentProps> = ({ description, image }) => {
  return (
    <div className="rounded-lg flex w-full flex-col gap-2xl text-center laptop:gap-l">
      <h3 className="subtitle-regular laptop:body-regular">{description}</h3>
      <Image
        src={image}
        alt="carouselImage"
        width={0}
        height={0}
        sizes="100vw"
        className="auto mx-auto w-full object-contain laptop:max-w-[580px]"
      />
    </div>
  );
};
export default SwiperWithStepper;
