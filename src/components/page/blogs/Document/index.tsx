import DocumentBannerCard from '@/components/ui/Card/DocumentBannerCard';
import SectionCard from '@/components/ui/Card/SectionCard';

const DocumentSection = () => {
  return (
    <SectionCard>
      <div className="container flex w-full items-center justify-between">
        <DocumentBannerCard />
      </div>
    </SectionCard>
  );
};

export default DocumentSection;
