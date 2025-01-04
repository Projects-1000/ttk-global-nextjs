import Button from '@/components/ui/Button/Button';
import CheckIcon from '@/components/ui/icons/CheckIcon';
import React, { PropsWithChildren } from 'react';
import videoBg from '@/assets/howitwork/video-bg.png';
import Image from 'next/image';
import { CirclePlay } from 'lucide-react';
const HeroTitle = () => (
  <span className="uppercase h3-bold laptop:h1-bold">
    Hợp tác kinh doanh
    <span className="hidden text-primary-label h3-light tablet:inline"> (cùng TTK Global Ventures)</span>
    <span className="text-secondary-label"> TMĐT quốc tế </span>
  </span>
);
const HeroItem: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="flex gap-[10px]">
    <CheckIcon />
    {children}
  </div>
);

const HowItWorkHero = () => {
  const HERO_ITEMS = [
    <span key={1} className="text-black subtitle-regular laptop:headline-regular">
      Vận hành gian hàng <span className="subtitle-bold laptop:headline-bold">miễn phí</span> cho đến khi hòa vốn
    </span>,
    <span key={2} className="text-black subtitle-regular laptop:headline-regular">
      Cam kết <span className="subtitle-bold laptop:headline-bold">hoàn 100% vốn & lãi</span> nếu không hài lòng
    </span>,
    <span key={3} className="text-black subtitle-regular laptop:headline-regular">
      Hệ thống quảng cáo độc quyền <span className="subtitle-bold laptop:headline-bold">ACOS trung bình dưới 20%</span>
    </span>
  ];
  return (
    <section className="container flex w-full max-w-[1440px] flex-col gap-4xl py-mobile_section_padding laptop:py-desktop_section_padding laptop:pt-10">
      <HeroTitle />
      <div className="flex flex-col gap-y-[60px] laptop:flex-row laptop:gap-x-3xl">
        <div className="flex flex-col gap-2xl laptop:gap-3xl">
          <div className="flex flex-col gap-l">
            {HERO_ITEMS.map((item, index) => (
              <HeroItem key={index}>{item}</HeroItem>
            ))}
          </div>
          <div className="flex items-center gap-l">
            <Button text="Đặt lịch meeting" classCustom="flex-1 tablet:flex-none" />
            <Button text="Tính lợi nhuận" color="secondary" classCustom="flex-1 tablet:flex-none" />
          </div>
        </div>
        <div className="relative h-auto w-full px-3xl desktop:w-1/2">
          <Image src={videoBg} alt="" width={0} height={0} sizes="100vw" className="h-full w-full object-contain" />
          <CirclePlay className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black" size={40} />
        </div>
      </div>
    </section>
  );
};

export default HowItWorkHero;
