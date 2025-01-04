import TargetPartnerCard from '@/components/ui/Card/PartnerCard/TargetPartnerCard';
import TargetPartnerHeadingCard from '@/components/ui/Card/PartnerCard/TargetPartnerHeadingCard';
import SectionCard from '@/components/ui/Card/SectionCard';
import { Building, ChartLine, Globe, ShoppingBag, User } from 'lucide-react';
import React from 'react';

const TargetPartner = () => {
  const fakeData = [
    {
      id: 1,
      icon: <User size={50} />,
      title: 'Các agency đã và đang vận hành sàn thương mại điện tử nội địa',
      description:
        'Có trong tay tệp khách hàng là các nhà sản xuất, doanh nghiệp xuất khẩu hàng hóa truyền thống. Có thể giới thiệu khách hàng đến TTK, cũng như đề xuất khách hàng về việc mở rộng hình thức kinh doanh sang TMĐT.'
    },
    {
      id: 2,
      icon: <Building size={50} />,
      title: 'Các doanh nghiệp logistics vận chuyển hàng quốc tế',
      description:
        'Có trong tay tệp khách hàng là các nhà sản xuất, doanh nghiệp xuất khẩu hàng hóa truyền thống. Có thể giới thiệu khách hàng đến TTK, cũng như đề xuất khách hàng về việc mở rộng hình thức kinh doanh sang TMĐT.'
    },
    {
      id: 3,
      icon: <ChartLine size={50} />,
      title: 'Các công ty xúc tiến thương mại',
      description:
        'Có trong tay tệp khách hàng là các nhà sản xuất, doanh nghiệp xuất khẩu hàng hóa truyền thống. Có thể giới thiệu khách hàng đến TTK, cũng như đề xuất khách hàng về việc mở rộng hình thức kinh doanh sang TMĐT.'
    },
    {
      id: 4,
      icon: <ShoppingBag size={50} />,
      title: 'Các agency đã và đang vận hành sàn thương mại điện tử nội địa',
      description:
        'Có trong tay tệp khách hàng là các nhà sản xuất, doanh nghiệp xuất khẩu hàng hóa truyền thống. Có thể giới thiệu khách hàng đến TTK, cũng như đề xuất khách hàng về việc mở rộng hình thức kinh doanh sang TMĐT.'
    },
    {
      id: 5,
      icon: <Globe size={50} />,
      title: 'Các agency đã và đang vận hành sàn thương mại điện tử nội địa',
      description:
        'Có trong tay tệp khách hàng là các nhà sản xuất, doanh nghiệp xuất khẩu hàng hóa truyền thống. Có thể giới thiệu khách hàng đến TTK, cũng như đề xuất khách hàng về việc mở rộng hình thức kinh doanh sang TMĐT.'
    }
  ];
  return (
    <SectionCard customClass="max-w-[1440px] w-full container">
      <div className="grid w-full grid-cols-1 gap-2xl tablet:grid-cols-2 tablet:gap-3xl">
        <TargetPartnerHeadingCard />
        {fakeData.map((item) => (
          <TargetPartnerCard key={item.id} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </SectionCard>
  );
};

export default TargetPartner;
