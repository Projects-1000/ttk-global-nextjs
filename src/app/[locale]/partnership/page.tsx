import PageHeader from '@/components/layout/PageHeader';
import DocumentSection from '@/components/page/blogs/Document';
import CTASection from '@/components/page/document/CTASection';
import PartnershipBenefit from '@/components/page/parnership/PartnershipBenefit';
import PartnershipFormSection from '@/components/page/parnership/PartnershipFormSection';
import TargetPartner from '@/components/page/parnership/TargetPartner';
import Image from 'next/image';
import React from 'react';
import BgBlurCircle from '@/assets/bg-blue-circle.png';
import ToolSection from '@/components/page/parnership/ToolSection';
const PartnerShip = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <PageHeader title="Cộng tác liên kết" />
      <PartnershipFormSection />
      {/* <ToolSection /> */}
      <TargetPartner />
      <PartnershipBenefit />
      <DocumentSection />
      <CTASection />
      <div className="absolute bottom-0 hidden scale-[1.2] laptop:bottom-[6%] laptop:left-[-24%] laptop:block desktop:bottom-[8%] desktop:left-[-10%] desktop:scale-[1.5]">
        <Image src={BgBlurCircle} width={0} height={0} sizes="100vw" alt="background-blue" className="h-auto w-full" />
      </div>
    </div>
  );
};

export default PartnerShip;
