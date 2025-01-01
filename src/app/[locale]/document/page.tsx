import PageHeader from '@/components/layout/PageHeader';
import CTASection from '@/components/page/parnership/CTASection';
import DocumentCard from '@/components/ui/Card/DocumentCard';
import SectionCard from '@/components/ui/Card/SectionCard';

const Document = () => {
  const documents = [
    { name: 'Nghiên cứu sản phẩm tiềm năng 1', label: 'Label', downloadLink: '#' },
    { name: 'Nghiên cứu sản phẩm tiềm năng 2', label: 'Label', downloadLink: '#' },
    { name: 'Nghiên cứu sản phẩm tiềm năng 3', label: 'Label', downloadLink: '#' },
    { name: 'Nghiên cứu sản phẩm tiềm năng 4', label: 'Label', downloadLink: '#' },
    { name: 'Nghiên cứu sản phẩm tiềm năng 5', label: 'Label', downloadLink: '#' },

    { name: 'Nghiên cứu sản phẩm tiềm năng 6', label: 'Label', downloadLink: '#' }
  ];
  const EbookTitle = () => <h1 className="text-secondary-label">E-BOOK</h1>;
  const ServiceDocumentTitle = () => (
    <span>
      Tài liệu
      <span className="text-secondary-label"> dịch vụ</span>
    </span>
  );

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <PageHeader title="Tài Nguyên " />
      <SectionCard customClass="w-full container max-w-[1440px]">
        <DocumentCard title={<EbookTitle />} documents={documents} />
        <DocumentCard title={<ServiceDocumentTitle />} documents={documents} />
        <CTASection />
      </SectionCard>
    </div>
  );
};

export default Document;
