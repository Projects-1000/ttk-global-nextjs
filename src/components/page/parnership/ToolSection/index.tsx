import Button from '@/components/ui/Button/Button';
import SectionCard from '@/components/ui/Card/SectionCard';
import ControlledInput from '@/components/ui/Input';
import React from 'react';
import ToolSectionItem from './components/ToolSectionItem';
import ToolSectionForm from '@/components/ui/Form/ToolSectionForm';

const ToolSection = () => {
  const ITEMS = [
    {
      title: 'Đợt 1',
      rate: '50% Hoa hồng',
      card: (
        <ToolSectionCard
          title="Điều kiện chi trả:"
          description={
            <>
              <ul>
                <li>Chi trả hoa hồng ngay sau khi ký hợp đồng và nhận thanh toán cọc từ Nhà đầu tư/Doanh nghiệp.</li>
                <li>Phát sinh dự án (ký hợp đồng) trong vòng 6 tháng kể từ lời giới thiệu của Đối tác B2B.</li>
              </ul>
            </>
          }
        />
      )
    },
    {
      title: 'Đợt 2',
      rate: '50% Hoa hồng',
      card: (
        <ToolSectionCard
          title="Điều kiện chi trả:"
          description={
            <>
              <ul>
                <li>Chi trả hoa hồng vào tháng thứ 7 kể từ khi phát sinh bắt đầu triển khai dự án.</li>
                <li>Điều kiện:</li>
                <ul>
                  <li>Dự án vận hành được 6 tháng kể từ khi ký hợp đồng thành công.</li>
                  <li>Nhà đầu tư/Doanh nghiệp chọn tiếp tục hợp tác với TTK.</li>
                </ul>
              </ul>
            </>
          }
        />
      )
    },
    {
      title: 'Công cụ tính toán hoa hồng EBO-C',
      description:
        'Công cụ ước tính hoa hồng Đơn vị cộng tác có thể nhận được khi hợp tác cùng TTK Global Ventures thông qua giới thiệu dịch vụ EBO-C đến Khách hàng',
      card: <ToolSectionForm />
    }
  ];
  const description =
    'Tích hợp công cụ tính toán lợi nhuận tiềm năng - Công cụ ước tính hoa hồng mà Đơn vị của bạn có thể nhận được khi cộng tác cùng TTK Global Ventures thông qua giới thiệu mô hình EBO-C đến Khách hàng.';
  return (
    <SectionCard isPaddingContent description={description} title={<ToolSectionTitle />}>
      <div className="w-full">
        <div className="mx-auto w-fit rounded-full bg-primary-default px-l py-m text-greyscale-negative body-bold laptop:px-3xl laptop:py-xl laptop:h4-bold">
          Mức hoa hồng: 2.5% trên Vốn đầu tư
        </div>
        <div className="mt-2xl flex flex-col gap-2xl laptop:mt-3xl laptop:gap-[60px]">
          {ITEMS.map((item, index) => (
            <ToolSectionItem key={index} {...item} isLast={index === ITEMS.length - 1} />
          ))}
        </div>
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

interface ToolSectionCardProps {
  title: string;
  description: React.ReactNode;
}

const ToolSectionCard: React.FC<ToolSectionCardProps> = ({ title, description }) => {
  return (
    <div className="border-gradient-stroke-1-p-3xl flex w-full flex-col bg-[#FAFAFE] p-3xl text-black laptop:gap-2xl laptop:p-3xl">
      <p className="body-bold laptop:h4-bold">{title}</p>
      <p className="subtitle-regular laptop:body-regular">{description}</p>
    </div>
  );
};
export default ToolSection;
