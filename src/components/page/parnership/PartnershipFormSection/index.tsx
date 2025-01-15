import SectionCard from '@/components/ui/Card/SectionCard';
import React from 'react';
import './index.scss';
import { Banknote, File, Search, Settings, Users } from 'lucide-react';
import PartnershipFormCard from './components/PartnershipFormCard';

const cardData = [
  {
    icon: <Users className="h-full w-full" />,
    title: 'Tiếp cận & thỏa thuận hợp tác',
    subtitle: (
      <ul>
        <li>Hai bên thảo luận về các điều khoản hợp tác, bao gồm:</li>
        <ul>
          <li>Quy định về thông tin của khách hàng (Lead).</li>
          <li>Tỷ lệ hoa hồng cho Đối tác B2B.</li>
          <li>Cách thức thanh toán hoa hồng.</li>
        </ul>
        <li>Ký kết hợp đồng</li>
      </ul>
    )
  },
  {
    icon: <File className="h-full w-full" />,
    title: 'Cung cấp thông tin',
    subtitle: (
      <ul>
        <li>
          Cung cấp tài liệu marketing: TTK cung cấp tài liệu marketing, brochure hoặc các tài liệu hỗ trợ khác để Đối
          tác B2B có thể sử dụng trong quá trình tìm kiếm Lead.
        </li>
      </ul>
    )
  },
  {
    icon: <Search className="h-full w-full" />,
    title: 'Tìm kiếm và cung cấp Lead',
    subtitle: (
      <ul>
        <li>
          Tìm kiếm Lead: Đối tác B2B tiến hành tìm kiếm và cung cấp thông tin về các Nhà đầu tư / Doanh nghiệp tiềm năng
          cần Hợp tác kinh doanh gian hàng TMĐT EBO-C.
        </li>
        <li> Gửi thông tin Lead: Đối tác B2B gửi thông tin Lead cho TTK theo định kỳ hoặc khi có Lead mới.</li>
      </ul>
    )
  },
  {
    icon: <Settings className="h-full w-full" />,
    title: 'Xử lý Lead & triển khai dự án',
    subtitle: (
      <ul>
        <li>Xử lý Lead: TTK tiếp nhận thông tin từ Đối tác B2B, tiến hành liên hệ và tư vấn cho các doanh nghiệp.</li>
        <li>
          Triển khai dự án: TTK thực hiện các công đoạn thuộc dự án Hợp tác kinh doanh gian hàng TMĐT Quốc tế cho Nhà
          đầu tư / Doanh nghiệp và theo dõi quá trình thực hiện.
        </li>
      </ul>
    )
  },
  {
    icon: <Banknote className="h-full w-full" />,
    title: 'Thanh toán hoa hồng',
    subtitle: (
      <ul>
        <li>
          Tính toán hoa hồng: TTK tính toán hoa hồng dựa theo chính sách đã thống nhất trong hợp đồng với Đối tác B2B.
        </li>
        <li>Thanh toán: TTK thực hiện thanh toán hoa hồng cho Đối tác B2B theo thỏa thuận trong hợp đồng.</li>
      </ul>
    )
  }
];
const PartnershipFormSection = () => {
  const description =
    'Khám phá các hình thức hợp tác đa dạng của chúng tôi, từ cơ hội kiếm hoa hồng hấp dẫn đến việc xây dựng thương hiệu chung. Chọn mô hình phù hợp nhất với định hướng của bạn.';

  return (
    <SectionCard title={<ParnershipFormSectionTitle />} description={description} isPaddingContent>
      <div className="container w-full laptop:mt-3xl">
        <div className="parnership-container relative grid w-full grid-cols-1 gap-3xl laptop:grid-cols-1 laptop:gap-0">
          <div className="line"></div>
          {cardData.map((card, index) => (
            <PartnershipFormCard key={index} index={index} {...card} />
          ))}
        </div>
      </div>
    </SectionCard>
  );
};

const ParnershipFormSectionTitle = () => (
  <p className="uppercase">
    HÌNH THỨC<span className="text-secondary-label"> HỢP TÁC</span>
  </p>
);

export default PartnershipFormSection;
