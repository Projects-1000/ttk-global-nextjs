import SectionCard from '@/components/ui/Card/SectionCard';
import React from 'react';

const DemoSection = () => {
  return (
    <SectionCard customClass="" title={<DemoSectionTitle />}>
      DemoSection
    </SectionCard>
  );
};
const DemoSectionTitle = () => (
  <span className="uppercase h3-bold laptop:h1-bold">
    Tính <span className="text-secondary-label"> lợi nhuận </span>ngay
  </span>
);
export default DemoSection;
