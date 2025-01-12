import Button from '@/components/ui/Button/Button';
import SectionCard from '@/components/ui/Card/SectionCard';
import React from 'react';

const ToolSection = () => {
  const description =
    'Tích hợp công cụ tính toán lợi nhuận tiềm năng - Công cụ ước tính hoa hồng mà Đơn vị của bạn có thể nhận được khi cộng tác cùng TTK Global Ventures thông qua giới thiệu mô hình EBO-C đến Khách hàng.';
  return (
    <SectionCard description={description} title={<ToolSectionTitle />}>
      <div>
        <Button size="large" isPill color="primary" text="Mức hoa hồng: 2.5% trên Vốn đầu tư" />
      </div>
    </SectionCard>
  );
};
const ToolSectionTitle = () => {
  return (
    <span className="uppercase h3-bold laptop:h1-bold">
      <span className="text-secondary-label">Lợi ích </span>đối với đơn vị công tác
    </span>
  );
};
export default ToolSection;
