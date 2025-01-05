import SectionCard from '@/components/ui/Card/SectionCard';
import LarkSchedule from '@/components/ui/LarkSchedule';
import React from 'react';

const LarkScheduleSection = () => {
  return (
    <SectionCard customClass="container" title={<LarkScheduleSectionTitle />}>
      <LarkSchedule />
    </SectionCard>
  );
};
const LarkScheduleSectionTitle = () => (
  <span className="uppercase">
    <span className="text-secondary-label"> Hợp tác </span>
    <span> ngay</span>
  </span>
);
export default LarkScheduleSection;
