'use client';

import CustomSwiper from '@/components/ui/CustomSwiper';
import { Stepper, Step, StepLabel } from '@mui/material';
import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';

const steps = [
  'Đăng ký hợp tác',
  'Đánh giá và xây dựng kế hoạch kinh doanh',
  'Vận hành gian hàng Amazon',
  'Theo dõi và chia sẻ lợi nhuận'
];
const stepSlides = [
  {
    title: 'Đăng ký hợp tác',
    description:
      'Doanh nghiệp (DN) / Nhà đầu tư (NĐT) đăng ký tư vấn và cung cấp thông tin về doanh nghiệp và sản phẩm của mình (nếu có).'
  },
  {
    title: 'Đánh giá và xây dựng kế hoạch kinh doanh',
    description: 'Content for step 2 goes here.'
  },
  {
    title: 'Vận hành gian hàng Amazon',
    description: 'Content for step 3 goes here.'
  },
  {
    title: 'Theo dõi và chia sẻ lợi nhuận',
    description: 'Content for step 4 goes here.'
  }
];
const SwiperWithStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  return (
    <div className="rounded-lg w-full bg-white p-6 shadow-md">
      <Stepper activeStep={activeStep} alternativeLabel className="mb-6 w-full">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>
              <span className={`text-sm font-medium ${activeStep === index ? 'text-blue-600' : 'text-gray-500'}`}>
                {label}
              </span>
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <CustomSwiper
        slidesPerView={1}
        navigation
        pagination={false}
        onSlideChange={(swiper) => setActiveStep(swiper.activeIndex)}
        wrapperClass="desktop:w-[calc(100%-160px)] laptop:w-[calc(100%-60px)] desktop:max-w-[1440px] "
        isAutoplay={false}
        spaceBetween={30}
        breakpoints={{
          375: {
            spaceBetween: 16,
            slidesPerView: 1.2
          },
          768: {
            spaceBetween: 16,
            slidesPerView: 1.2
          },
          1440: {
            spaceBetween: 16,
            slidesPerView: 1
          }
        }}
      >
        {stepSlides.map((step, index) => (
          <SwiperSlide key={index} className="h-full w-full">
            <StepContent title={step.title} description={step.description} />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </div>
  );
};
interface StepContentProps {
  title: string;
  description: string;
}
const StepContent: React.FC<StepContentProps> = ({ title, description }) => {
  return (
    <div className="rounded-lg bg-blue-100 p-6 text-center">
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};
export default SwiperWithStepper;
