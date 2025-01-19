import SectionCard from '@/components/ui/Card/SectionCard';
import LarkSchedule from '@/components/ui/LarkSchedule';
import React from 'react';
import blueVector from '@/assets/blue-vector.png';
import Image from 'next/image';
const LarkScheduleSection = () => {
  return (
    <SectionCard customClass="container relative" title={<LarkScheduleSectionTitle />}>
      <div className="absolute bottom-0 left-0 w-full translate-x-[-70%] translate-y-[50%] rotate-180 mobile:max-tablet:hidden">
        <Image src={blueVector} alt="" width={0} height={0} sizes="100vw" className="h-full w-full object-contain" />
      </div>
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
