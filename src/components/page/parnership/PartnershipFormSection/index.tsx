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
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur quam arcu, sit amet facilisis ipsum hendrerit vitae.';

  return (
    <SectionCard title={<ParnershipFormSectionTitle />} description={description}>
      <div className="container flex w-full flex-col items-center justify-between gap-2xl laptop:flex-row">
        {cardData.map((card, index) => (
          <PartnershipFormCard key={index} {...card} />
        ))}
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
    <div className="group flex min-h-full w-full cursor-pointer flex-col gap-2xl rounded-m bg-blue-10 p-xl text-center transition-shadow duration-300 hover:bg-primary-subtle laptop:w-[320px] laptop:gap-3xl">
      <div className="flex w-full justify-between">
        <div className="text-primary-label">{icon}</div>
        <div className="text-5xl text-[96px] font-extrabold text-[#3C4BCC]/15 text-blue-100 duration-300 group-hover:text-blue-500">
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
