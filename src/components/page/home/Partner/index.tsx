'use client';
import GridBackground from '@/assets/GridBackground';
import { LogoCard } from '@/components/ui/Card/LogoCard';
import SectionCard from '@/components/ui/Card/SectionCard';
import CustomSwiper from '@/components/ui/CustomSwiper';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';

interface MobileBodyProps {
  delay: number;
  speed: SwiperOptions['speed'];
}

const partners = [
  {
    id: 0,
    name: 'Amazon',
    src: '/assets/demo/partner-amazon.png',
    href: 'https://www.amazon.com'
  },
  {
    id: 1,
    name: 'Amazon',
    src: '/assets/demo/partner-amazon.png',
    href: 'https://www.amazon.com'
  },
  {
    id: 2,
    name: 'Amazon',
    src: '/assets/demo/partner-amazon.png',
    href: 'https://www.amazon.com'
  },
  {
    id: 3,
    name: 'Amazon',
    src: '/assets/demo/partner-amazon.png',
    href: 'https://www.amazon.com'
  },
  {
    id: 4,
    name: 'Amazon',
    src: '/assets/demo/partner-amazon.png',
    href: 'https://www.amazon.com'
  },
  {
    id: 5,
    name: 'Amazon',
    src: '/assets/demo/partner-amazon.png',
    href: 'https://www.amazon.com'
  },
  {
    id: 6,
    name: 'Amazon',
    src: '/assets/demo/partner-amazon.png',
    href: 'https://www.amazon.com'
  },
  {
    id: 7,
    name: 'Amazon',
    src: '/assets/demo/partner-amazon.png',
    href: 'https://www.amazon.com'
  },
  {
    id: 8,
    name: 'Amazon',
    src: '/assets/demo/partner-amazon.png',
    href: 'https://www.amazon.com'
  },
  {
    id: 9,
    name: 'Amazon',
    src: '/assets/demo/partner-amazon.png',
    href: 'https://www.amazon.com'
  }
];

const Partner = () => {
  function splitIconsIntoChunks<T>(icons: Array<T>, chunkSize = 4) {
    const arrayParent = [];
    for (let i = 0; i < icons.length; i += chunkSize) {
      const arrayChild = icons.slice(i, i + chunkSize);
      arrayParent.push(arrayChild);
    }
    return arrayParent;
  }
  const rows = splitIconsIntoChunks(partners, 4);

  return (
    <SectionCard
      title={SectionTitle}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dignissim nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    >
      <div className="container hidden flex-col items-center laptop:flex laptop:gap-3xl laptop:px-3xl desktop:gap-4xl desktop:px-4xl">
        {rows.map((row, i) => {
          return (
            <div className="flex flex-row items-center laptop:gap-3xl desktop:gap-4xl" key={i}>
              {row.map(({ href, id, name, src }) => {
                return <LogoCard key={id} name={name} src={src} href={href} />;
              })}
            </div>
          );
        })}
      </div>
      <MobileBody delay={2} speed={4000} />
      <MobileBody delay={1} speed={2000} />
      <MobileBody delay={0} speed={3000} />
    </SectionCard>
  );
};

const MobileBody = ({ delay, speed }: MobileBodyProps) => {
  return (
    <div className="max-w-[100vw] laptop:max-w-0">
      <div className="inline-block w-full laptop:hidden">
        <CustomSwiper
          isAutoplay
          allowTouchMove={false}
          spaceBetween={50}
          initialSlide={delay}
          direction="horizontal"
          speed={speed}
          breakpoints={{
            375: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30
            }
          }}
          className="swiper-infinity-slider"
        >
          {partners.map(({ href, id, name, src }) => (
            <SwiperSlide key={id}>
              <LogoCard name={name} src={src} href={href} />
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </div>
    </div>
  );
};

const SectionTitle = (
  <p>
    PHỐI HỢP CÙNG <span className="hidden tablet:inline">CÁC</span>
    <span className="text-secondary-label">ĐƠN VỊ QUỐC TẾ</span>
  </p>
);

export default Partner;
