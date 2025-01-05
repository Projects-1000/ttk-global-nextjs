import SectionCard from '@/components/ui/Card/SectionCard';
import ComparisonTable from '@/components/ui/Table/ComparisonTable';
import React from 'react';

const Benefit = () => {
  const header = ['Tự kinh doanh', 'Hợp tác EBO-C cùng TTK GV'];
  const tableData = {
    cost: [
      {
        selfEmployed: 'Từ 30.000 USD (mặt bằng, nhân sự, vận hành, marketing,...)',
        businessCooperation: 'Chỉ từ 10.000 USD'
      },
      {
        selfEmployed: 'Phát sinh nhiều chi phí "không tên" ',
        businessCooperation: 'Không phát sinh chi phí cố định'
      },
      {
        selfEmployed: 'Khó kiểm soát dòng tiền',
        businessCooperation: 'Dòng tiền minh bạch, rõ ràng'
      }
    ],
    profit: [
      {
        selfEmployed: 'Phụ thuộc vào nhiều yếu tố (thị trường, cạnh tranh,...)',
        businessCooperation: 'Phụ thuộc vào nhiều yếu tố (thị trường, cạnh tranh,...)'
      },
      {
        selfEmployed: 'Thời gian hoàn vốn lâu (3-5 năm)',
        businessCooperation: 'Thời gian hoàn vốn lâu (3-5 năm)'
      },
      {
        selfEmployed: 'Doanh thu không ổn định',
        businessCooperation: 'Tiềm năng lợi nhuận cao và ổn định'
      }
    ],
    risk: [
      {
        selfEmployed: 'Cao (rủi ro thị trường, cạnh tranh, nguồn vốn,...)',
        businessCooperation: 'Thấp hơn (TTK đồng hành và hỗ trợ)'
      },
      {
        selfEmployed: 'Được kiểm soát',
        businessCooperation: 'Được kiểm soát'
      },
      {
        selfEmployed: 'Tự chịu trách nhiệm hoàn toàn',
        businessCooperation: 'Chia sẻ rủi ro cùng TTK'
      }
    ]
  };

  const description =
    'So sánh rõ ràng giữa mô hình tự kinh doanh truyền thống và hợp tác EBO-C với TTK GV, giúp bạn thấy được những lợi thế vượt trội về chi phí, rủi ro và tiềm năng lợi nhuận.';
  return (
    <SectionCard customClass="container" title={<BenefitTitle />} description={description}>
      <ComparisonTable columns={header} data={tableData} />
    </SectionCard>
  );
};
const BenefitTitle = () => (
  <span className="uppercase h3-bold laptop:h1-bold">
    <span className="text-secondary-label">Lợi ích </span> của mô hình
  </span>
);
export default Benefit;
