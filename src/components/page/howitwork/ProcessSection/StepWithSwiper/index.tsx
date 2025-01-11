'use client';
import carouselImage from '@/assets/howitwork/carousel-so-lieu.png';
import DialogButton from '@/components/ui/Button/DiaglogButton';
import CustomSwiper from '@/components/ui/CustomSwiper';
import '@/styles/scss/_helper.scss';
import { Step, StepLabel, Stepper } from '@mui/material';
import Image from 'next/image';
import { ReactNode, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import './index.scss';
import DialogImageText from '../DialogImageText';

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
    description: (
      <>
        TTK Global Ventures sẽ triển khai theo <DialogImageText image={carouselImage} title="quy trình hợp tác" /> đã
        xây dựng và đề xuất <DialogImageText image={carouselImage} title="phương án hợp tác" /> phù hợp với DN/NĐT.
      </>
    ),
    image: carouselImage
  },
  {
    description: (
      <>
        TTK Global Ventures sẽ đảm nhiệm toàn bộ quá trình vận hành gian hàng Amazon theo quy trình các bước Launching;
        từ tạo tài khoản; quản lý hoạt động tiếp thị, hàng hóa, thanh toán, chuỗi cung ứng, nghiên cứu và phát triển sản
        phẩm...
      </>
    ),
    image: carouselImage
  },
  {
    description: (
      <>
        DN/NĐT sẽ được cập nhật thường xuyên về đơn hàng, P&L (Báo cáo kết quả kinh doanh), được{' '}
        <DialogImageText image={carouselImage} title="chia sẻ tài sản dự án & lợi nhuận" /> theo thỏa thuận. Xem thêm về{' '}
        <DialogImageText image={carouselImage} title="Quy trình thanh toán lợi nhuận" /> và{' '}
        <DialogImageText image={carouselImage} title="Quy trình chấm dứt hợp tác" />
      </>
    ),
    image: carouselImage
  }
];

interface StepContentProps {
  description: string | ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
}

const SwiperWithStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="container-margin tablet:border-gradient-stroke-1 tablet:border-gradient-stroke-1 rounded-m border-[1px] tablet:bg-white/30 tablet:backdrop-blur-md laptop:pb-4xl">
      <div className="mobile:max-tablet:border-gradient-stroke-1 mb-2xl rounded-m p-l mobile:max-tablet:border mobile:max-tablet:bg-white/30 mobile:max-tablet:backdrop-blur-md laptop:mb-l laptop:px-xl laptop:py-2xl">
        <Stepper activeStep={activeStep} alternativeLabel className={`relative w-full`}>
          {steps.map((label, index) => (
            <Step
              key={label}
              className={`${activeStep !== index && 'mobile:max-tablet:hidden'} mobile:max-tablet:min-h-[65px]`}
            >
              <StepLabel className="mobile:max-tablet:min-h-[65px] mobile:max-tablet:px-[48px]">
                <span
                  className={` ${activeStep === index ? 'text-blue-600 body-bold tablet:headline-bold' : 'text-gray-500 body-bold'} smooth-transition`}
                >
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
        isMobileShow={true}
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
