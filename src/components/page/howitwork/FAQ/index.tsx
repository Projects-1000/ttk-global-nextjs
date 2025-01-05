import SectionCard from '@/components/ui/Card/SectionCard';
import Dropdown from '@/components/ui/Dropdown';
import React from 'react';
import yellowVector from '@/assets/yellow-vector.png';
import Image from 'next/image';
const faqItems = [
  {
    title: 'Nghiên cứu sản phẩm tiềm năng',
    content: 'Chi tiết về việc nghiên cứu sản phẩm và các thông tin liên quan.'
  },
  {
    title: 'Chuẩn bị tài nguyên gian hàng TMĐT',
    content: 'Thông tin về việc chuẩn bị tài nguyên cho gian hàng TMĐT.'
  },
  {
    title: 'Báo cáo kết quả hoạt động kinh doanh',
    content: (
      <ul className="list-disc">
        <li>Mỗi tháng/quý, TTKGV có trách nhiệm cung cấp báo cáo hoạt động kinh doanh của gian hàng.</li>
        <li>Cập nhật các kế hoạch bán hàng, marketing của tháng/quý tiếp theo (nếu có).</li>
      </ul>
    )
  }
];
const FAQ = () => {
  const description =
    'Giải đáp những câu hỏi thường gặp về công ty, cũng như về quy trình hợp tác. Tìm hiểu ngay để bắt đầu hành trình kinh doanh hiệu quả.';
  return (
    <SectionCard customClass="container relative " title={<FAQTitle />} description={description}>
      <div className="scale-30 absolute right-0 top-0 -z-10 flex w-full translate-x-[50%] translate-y-[-50%] rotate-180 opacity-30 mobile:max-tablet:hidden">
        <Image src={yellowVector} alt="" width={0} height={0} sizes="100vw" className="h-full w-full object-contain" />
      </div>
      <div className="grid grid-cols-1 gap-x-3xl tablet:grid-cols-2">
        {faqItems.map((item) => (
          <Dropdown classCustom="max-w-[560px] h-fit " key={item.title} title={item.title}>
            {item.content}
          </Dropdown>
        ))}
      </div>
    </SectionCard>
  );
};
const FAQTitle = () => (
  <span className="uppercase h3-bold laptop:h1-bold">
    <span className="text-secondary-label">FAQ</span>
  </span>
);

export default FAQ;
