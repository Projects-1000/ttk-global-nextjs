import PageHeader from '@/components/layout/PageHeader';
import CTASection from '@/components/page/document/CTASection';
import DocumentSection from '@/components/page/document/DocumentSection';

const Document = () => {
  // const documents = [
  //   { name: 'Nghiên cứu sản phẩm tiềm năng 1', label: 'Label', downloadLink: '#' },
  //   { name: 'Nghiên cứu sản phẩm tiềm năng 2', label: 'Label', downloadLink: '#' },
  //   { name: 'Nghiên cứu sản phẩm tiềm năng 3', label: 'Label', downloadLink: '#' },
  //   { name: 'Nghiên cứu sản phẩm tiềm năng 4', label: 'Label', downloadLink: '#' },
  //   { name: 'Nghiên cứu sản phẩm tiềm năng 5', label: 'Label', downloadLink: '#' },

  //   { name: 'Nghiên cứu sản phẩm tiềm năng 6', label: 'Label', downloadLink: '#' }
  // ];

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <PageHeader title="Tài Nguyên " />
      <DocumentSection />
      <CTASection />
      {/* <div dangerouslySetInnerHTML={{ __html: larkContent }}></div>; */}
    </div>
  );
};

export default Document;
