import Button from '@/components/ui/Button/Button';
import CheckIcon from '@/components/ui/icons/CheckIcon';
import React, { PropsWithChildren } from 'react';
import videoBg from '@/assets/howitwork/video-bg.png';
import Image from 'next/image';
import { CirclePlay } from 'lucide-react';
import graphic from '@/assets/howitwork/hero/Graphic.png';
import combineVector from '@/assets/yellow-blue-vector.png';
import mobileGraphic from '@/assets/howitwork/hero/mobile-graphic.png';
const HeroTitle = () => (
  <div className="flex justify-start gap-x-m">
    <p className="uppercase h4-bold tablet:h3-bold laptop:h1-bold desktop:basis-1/2">
      Hợp tác kinh doanh
      <br />
      <span className="text-secondary-label"> TMĐT quốc tế </span>
    </p>
    <span className="mt-3 hidden text-primary-label tablet:inline laptop:h4-light desktop:h3-light">
      (cùng TTK Global Ventures)
    </span>
  </div>
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
      Vận hành gian hàng <span className="text-primary-default subtitle-bold laptop:headline-bold">miễn phí</span> cho
      đến khi hòa vốn
    </span>,
    <span key={2} className="text-black subtitle-regular laptop:headline-regular">
      Cam kết <span className="text-primary-default subtitle-bold laptop:headline-bold">hoàn 100% vốn & lãi</span> nếu
      không hài lòng
    </span>,
    <span key={3} className="text-black subtitle-regular laptop:headline-regular">
      Hệ thống quảng cáo độc quyền{' '}
      <span className="text-primary-default subtitle-bold laptop:headline-bold">ACOS trung bình dưới 20%</span>
    </span>
  ];
  return (
    <section className="container flex w-full max-w-[1440px] flex-col gap-4xl py-mobile_section_padding laptop:py-desktop_section_padding laptop:pt-10">
      <HeroTitle />
      <div className="relative flex flex-col gap-y-[60px] laptop:flex-row laptop:gap-x-3xl">
        <div className="absolute bottom-0 left-0 w-full translate-x-[3.5%] translate-y-[15%] scale-110 mobile:max-tablet:hidden">
          <Image src={graphic} alt="" width={0} height={0} sizes="100vw" className="h-full w-full object-contain" />
        </div>
        <div className="flex flex-col gap-2xl laptop:gap-3xl">
          <div className="flex flex-col gap-l">
            {HERO_ITEMS.map((item, index) => (
              <HeroItem key={index}>{item}</HeroItem>
            ))}
          </div>
          <div className="flex items-center gap-l">
            <Button
              text="Đặt lịch meeting"
              classCustom="w-full tablet:w-fit btn__small tablet:btn__medium laptop:btn__large"
            />
            <Button
              text="Tính lợi nhuận"
              color="secondary"
              classCustom="w-full tablet:w-fit btn__small tablet:btn__medium laptop:btn__large"
            />
          </div>
        </div>
        <div className="relative h-auto w-full laptop:max-w-[50%] laptop:px-3xl">
          <Image src={videoBg} alt="" width={0} height={0} sizes="100vw" className="h-full w-full object-contain" />
          <CirclePlay className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black" size={40} />
          <div className="absolute bottom-0 left-0 -z-10 flex w-full translate-x-[3.5%] translate-y-[15%] rotate-[18deg] scale-[2] opacity-30 mobile:max-tablet:hidden">
            <Image
              src={combineVector}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 flex w-full translate-x-[3%] scale-[1.65] opacity-30 tablet:hidden">
            <Image
              src={mobileGraphic}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 flex w-full translate-x-[3%] scale-[2] opacity-30 tablet:hidden">
            <Image
              src={combineVector}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorkHero;
