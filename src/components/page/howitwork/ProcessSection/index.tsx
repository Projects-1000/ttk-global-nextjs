import SectionCard from '@/components/ui/Card/SectionCard';
import React from 'react';
import SwiperWithStepper from './StepWithSwiper';

const ProcessSection = () => {
  const description =
    'Quy trình hợp tác rõ ràng, minh bạch từ đăng ký đến chia sẻ lợi nhuận. Chúng tôi đồng hành cùng bạn trong từng bước triển khai, đảm bảo hiệu quả tối ưu cho mọi dự án.';
  return (
    <SectionCard customClass="container" title={<ProcessSectionTitle />} description={description}>
      <div className="block">
        <SwiperWithStepper />
      </div>
    </SectionCard>
  );
};
const ProcessSectionTitle = () => (
  <span className="uppercase h3-bold laptop:h1-bold">
    <span className="text-secondary-label">Quy trình </span>hợp tác
  </span>
);
export default ProcessSection;
