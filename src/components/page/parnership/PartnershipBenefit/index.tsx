import SectionCard from '@/components/ui/Card/SectionCard';
import React from 'react';
import videoBg from '@/assets/howitwork/video-bg.png';
import Image from 'next/image';

const PartnershipBenefit = () => {
  const description = (
    <>
      Tích hợp công cụ tính toán <span className="text-secondary-default body-bold">lợi nhuận tiềm năng</span> - Công cụ ước tính
      hoa hồng Agency có thể nhận được khi hợp tác cùng TTK Global Ventures thông qua giới thiệu dịch vụ EBO-C đến Khách
      hàng
    </>
  );
  return (
    <SectionCard title={<PartnershipBenefitTitle />} description={description}>
      <div className="container flex w-full items-center justify-between">
        <Image src={videoBg} alt="" width={0} height={0} sizes="100vw" className="h-full w-full object-contain" />
      </div>
    </SectionCard>
  );
};
const PartnershipBenefitTitle = () => (
  <p className="uppercase">
    LỢI ÍCH<span className="text-secondary-label"> ĐỐI VỚI ĐỐI TÁC</span>
  </p>
);

export default PartnershipBenefit;
