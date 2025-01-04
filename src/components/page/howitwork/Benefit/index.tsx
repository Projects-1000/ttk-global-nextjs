import SectionCard from '@/components/ui/Card/SectionCard';
import ComparisonTable from '@/components/ui/Table/ComparisonTable';
import React from 'react';

const Benefit = () => {
  const columns = [
    { key: 'selfEmployed', title: 'Tự kinh doanh' },
    { key: 'businessCooperation', title: 'Hợp tác EBO-C cùng TTK GV' }
  ];

  const data = {
    selfEmployed: [
      {
        title: { key: 'cost', content: 'Chi phí' },
        data: [
          'Từ 30.000 USD (mặt bằng, nhân sự, vận hành, marketing,...)',
          'Phát sinh nhiều chi phí "không tên" ',
          'Khó kiểm soát dòng tiền'
        ]
      },
      {
        title: { key: 'profit', content: 'Lợi nhuận' },
        data: [
          'Phụ thuộc vào nhiều yếu tố (thị trường, cạnh tranh,...)',
          'Thời gian hoàn vốn lâu (3-5 năm)',
          'Doanh thu không ổn định'
        ]
      },
      {
        title: { key: 'risk', content: 'Rủi ro' },
        data: ['Cao (rủi ro thị trường, cạnh tranh, nguồn vốn,...)', 'Khó kiểm soát', 'Tự chịu trách nhiệm hoàn toàn']
      }
    ],
    businessCooperation: [
      {
        title: { key: 'cost', content: 'Chi phí' },
        data: ['Chỉ từ 10.000 USD', 'Không phát sinh chi phí cố định', 'Dòng tiền minh bạch, rõ ràng']
      },
      {
        title: { key: 'profit', content: 'Lợi nhuận' },
        data: [
          'Tiềm năng lợi nhuận cao và ổn định',
          'Thời gian hoàn vốn nhanh (12-18 tháng)',
          'Tiếp cận thị trường toàn cầu, gia tăng doanh thu'
        ]
      },
      {
        title: { key: 'risk', content: 'Rủi ro' },
        data: ['Thấp hơn (TTK đồng hành và hỗ trợ)', 'Được kiểm soát', 'Chia sẻ rủi ro cùng TTK']
      }
    ]
  };
  const description =
    'So sánh rõ ràng giữa mô hình tự kinh doanh truyền thống và hợp tác EBO-C với TTK GV, giúp bạn thấy được những lợi thế vượt trội về chi phí, rủi ro và tiềm năng lợi nhuận.';
  return (
    <SectionCard title={<BenefitTitle />} description={description}>
      <ComparisonTable columns={columns} data={data} />
    </SectionCard>
  );
};
const BenefitTitle = () => (
  <span className="uppercase h3-bold laptop:h1-bold">
    <span className="text-secondary-label">Lợi ích </span> của mô hình
  </span>
);
export default Benefit;
