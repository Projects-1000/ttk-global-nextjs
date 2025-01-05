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

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, steps.length - 1));
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  // };

  return (
    <div className="container-margin border-gradient-stroke-1 tablet:border-gradient-stroke-1 rounded-m border-[1px] bg-white/30 backdrop-blur-md laptop:pb-4xl">
      <div className="mobile:max-tablet:border-gradient-stroke-1 mobile:max-tablet:border-gradient-stroke-1 mb-2xl rounded-m p-l mobile:max-tablet:border laptop:mb-l laptop:px-xl laptop:py-2xl">
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

      <div className="flex w-full justify-center">
        <CustomSwiper
          slidesPerView={1}
          isFullWidth={false}
          navigation
          loop={false}
          onSlideChange={(swiper) => setActiveStep(swiper.activeIndex)}
          autoHeight={true}
          spaceBetween={100}
          wrapperClass=" laptop:max-w-[700px] w-full "
        >
          {stepSlides.map((step, index) => (
            <SwiperSlide virtualIndex={index} key={index}>
              <StepContent image={step.image} description={step.description} />
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </div>
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
