import PageHeader from '@/components/layout/PageHeader';
import DocumentSection from '@/components/page/blogs/Document';
import CTASection from '@/components/page/document/CTASection';
import PartnershipBenefit from '@/components/page/parnership/PartnershipBenefit';
import PartnershipFormSection from '@/components/page/parnership/PartnershipFormSection';
import TargetPartner from '@/components/page/parnership/TargetPartner';
import React from 'react';

const PartnerShip = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <PageHeader title="Đối tác kinh doanh" />
      <PartnershipFormSection />
      <TargetPartner />
      <PartnershipBenefit />
      <DocumentSection />
      <CTASection />
    </div>
  );
};

export default PartnerShip;
