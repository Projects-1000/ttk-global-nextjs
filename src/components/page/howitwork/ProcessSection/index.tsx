import SectionCard from '@/components/ui/Card/SectionCard';
import React from 'react';
import SwiperWithStepper from './StepWithSwiper';
import { TtkFrame } from '@/assets/TtkFrame';

const ProcessSection = () => {
  const description =
    'Quy trình hợp tác rõ ràng, minh bạch từ đăng ký đến chia sẻ lợi nhuận. Chúng tôi đồng hành cùng bạn trong từng bước triển khai, đảm bảo hiệu quả tối ưu cho mọi dự án.';
  return (
    <SectionCard customClass="relative" title={<ProcessSectionTitle />} description={description}>
      <div className="absolute top-[0] -z-10 translate-x-[40%] translate-y-[-45%] scale-[0.4] mobile:max-tablet:right-0 tablet:left-0 tablet:translate-x-[-50%] tablet:translate-y-[-5%] tablet:scale-[0.6]">
        <TtkFrame />
      </div>
      <SwiperWithStepper />
    </SectionCard>
  );
};
const ProcessSectionTitle = () => (
  <span className="uppercase h3-bold laptop:h1-bold">
    <span className="text-secondary-label">Quy trình </span>hợp tác
  </span>
);
export default ProcessSection;
