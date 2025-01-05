import SectionCard from '@/components/ui/Card/SectionCard';
import { Users } from 'lucide-react';
import React from 'react';
const cardData = [
  {
    icon: <Users size={75} className="text-primary-label" />,
    title: 'Referral Partner',
    subtitle: 'Giới thiệu khách hàng, nhận hoa hồng',
    number: '01'
  },
  {
    icon: <Users size={75} className="text-primary-label" />,
    title: 'Revenue Sharing',
    subtitle: 'Đồng vận hành và chia sẻ lợi nhuận',
    number: '02'
  },
  {
    icon: <Users size={75} className="text-primary-label" />,
    title: 'Co-Branding',
    subtitle: 'Phân phối dịch vụ dưới thương hiệu Agency',
    number: '03'
  }
];
const PartnershipFormSection = () => {
  const description =
    'Khám phá các hình thức hợp tác đa dạng của chúng tôi, từ cơ hội kiếm hoa hồng hấp dẫn đến việc xây dựng thương hiệu chung. Chọn mô hình phù hợp nhất với định hướng của bạn.';

  return (
    <SectionCard title={<ParnershipFormSectionTitle />} description={description} isPaddingContent>
      <div className="container">
        <div className="flex w-full flex-col items-center justify-between gap-2xl laptop:px-xl laptop:flex-row">
          {cardData.map((card, index) => (
            <PartnershipFormCard key={index} {...card} />
          ))}
        </div>
      </div>
    </SectionCard>
  );
};

interface CardProps {
  icon: React.ReactNode;
  title: string; // Main title
  subtitle: string; // Subtitle text
  number: string; // Large number text
}

const PartnershipFormCard: React.FC<CardProps> = ({ icon, title, subtitle, number }) => {
  return (
    <div className="group flex min-h-full w-full flex-col gap-2xl rounded-m bg-blue-10 p-xl text-center transition-shadow duration-300 hover:bg-primary-subtle tablet:max-laptop:w-[70%] laptop:w-[320px] laptop:gap-3xl">
      <div className="flex w-full items-center justify-between tablet:max-laptop:justify-center tablet:max-laptop:gap-xl">
        <div className="w-[56px] overflow-hidden text-primary-label">{icon}</div>
        <div className="text-[96px] font-extrabold leading-none text-[#3C4BCC]/15 text-blue-100 duration-300 group-hover:text-blue-500">
          {number}
        </div>
      </div>
      <div className="flex flex-col gap-l">
        <div className="text-primary-label h4-bold laptop:h3-bold">{title}</div>
        <div className="text-black subtitle-regular laptop:headline-regular">{subtitle}</div>
      </div>
    </div>
  );
};
const ParnershipFormSectionTitle = () => (
  <p className="uppercase">
    HÌNH THỨC<span className="text-secondary-label"> HỢP TÁC</span>
  </p>
);
export default PartnershipFormSection;
