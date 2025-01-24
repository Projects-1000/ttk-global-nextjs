import SectionCard from '@/components/ui/Card/SectionCard';
import Dropdown from '@/components/ui/Dropdown';
import React from 'react';
import yellowVector from '@/assets/yellow-vector.png';
import Image from 'next/image';
const faqItems = [
  {
    title: 'Điều kiện để tham gia mô hình EBO-C là gì?',
    content:
      'DN cần có nguồn vốn từ 10.000 USD/dự án, năng lực sản xuất ổn định với chất lượng tốt, giá COGS hợp lý và sản phẩm tiềm năng trên Amazon.'
  },
  {
    title: 'Những chi phí nào mà tôi phải chịu khi hợp tác?',
    content: (
      <ul className="list-disc">
        <li>Chi phí liên cung cấp hàng hóa, vốn đầu tư</li>
        <li>
          Tiền cọc đảm bảo dự án (2,500 USD). Số tiền dùng để đảm bảo chi phí vận hành cho TTK GV trong trường hợp DN
          muốn tự hủy dự án trước thời điểm hòa vốn. Và sẽ được hoàn lại khi dự án kết thúc.
        </li>
      </ul>
    )
  },
  {
    title: 'Tôi có quyền thay đổi sản phẩm hoặc vốn đầu tư trong quá trình hợp tác không?',
    content:
      'DN có quyền quyết định về sản phẩm và vốn đầu tư, và có thể thay đổi theo nhu cầu kinh doanh, nhưng cần thông báo và thỏa thuận với TTKGV.'
  },
  {
    title: 'TTKGV làm gì để đảm bảo hiệu suất gian hàng cho tôi?',
    content:
      'Trong quá trình vận hành, TTK GV sẽ thực hiện các chiến lược và tối ưu hóa để cải thiện hiệu suất của gian hàng, tuy nhiên không thể đảm bảo một mức doanh thu cụ thể. Hiệu suất sẽ phụ thuộc vào nhiều yếu tố thị trường và cạnh tranh.'
  },
  {
    title: 'Ai là người đưa ra các quyết định kinh doanh khi hợp tác?',
    content: (
      <ul className="list-disc">
        <li>
          TTK GV có quyền đưa ra quyết định cuối cùng cho các hoạt động liên quan đến tiếp thị và vận hành gian hàng.
        </li>
        <li>
          DN có quyền đưa ra quyết định cuối cùng liên quan đến sản phẩm, vốn đầu tư, ngân sách hoạt động của gian hàng.
        </li>
      </ul>
    )
  },
  {
    title: 'Tôi và TTKGV sẽ chia lợi nhuận / thanh toán như thế nào?',
    content: 'Phần thanh toán lợi nhuận sẽ được trao đổi khi hợp tác để tránh ảnh hưởng dòng tiền của dự án.'
  }
];
const FAQ = () => {
  const midIndex = Math.ceil(faqItems.length / 2);
  const groupedFaqItems = [faqItems.slice(0, midIndex), faqItems.slice(midIndex)];
  const description =
    'Giải đáp những câu hỏi thường gặp về công ty, cũng như về quy trình hợp tác. Tìm hiểu ngay để bắt đầu hành trình kinh doanh hiệu quả.';
  return (
    <SectionCard isPaddingContent customClass="relative " title={<FAQTitle />} description={description}>
      <div className="scale-30 absolute right-0 top-0 -z-10 flex w-full translate-x-[50%] translate-y-[-50%] rotate-180 opacity-30 mobile:max-tablet:hidden">
        <Image src={yellowVector} alt="" width={0} height={0} sizes="100vw" className="h-full w-full object-contain" />
      </div>
      <div className="flex flex-col items-start gap-x-3xl laptop:flex-row">
        {groupedFaqItems.map((group, index) => {
          return (
            <div className="flex w-full basis-1/2 flex-col gap-x-3xl" key={index}>
              {group.map((item) => (
                <Dropdown classCustom="w-full" key={item.title} title={item.title}>
                  {item.content}
                </Dropdown>
              ))}
            </div>
          );
        })}
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
