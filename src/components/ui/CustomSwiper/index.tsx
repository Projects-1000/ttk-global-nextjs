'use client';
import { HTMLAttributes, ReactNode } from 'react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperProps } from 'swiper/react';
import { NavigateButton } from '../Button/NavigateButton';
import './index.scss';

interface CustomSwipperProps extends SwiperProps {
  loop?: boolean;
  pagination?: boolean;
  navigation?: boolean;
  slidesPerView?: number;
  effect?: SwiperProps['effect'];
  spaceBetween?: number;
  centeredSlides?: boolean;
  autoPlay?: number;
  children: ReactNode;
  wrapperClass?: HTMLAttributes<HTMLDivElement>['className'];
}

const CustomSwiper = ({
  loop = true,
  pagination = false,
  navigation = true,
  slidesPerView = 1,
  effect,
  centeredSlides = false,
  spaceBetween = 30,
  autoPlay = 0,
  children,
  wrapperClass,
  ...props
}: CustomSwipperProps) => {
  const modules = [];
  if (pagination) modules.push(Pagination);
  if (navigation) modules.push(Navigation);
  if (props.modules) modules.push(...props.modules);

  return (
    <div className={`mx-auto ${wrapperClass}`}>
      <div className="swiper-container relative max-w-[100vw]">
        <Swiper
          modules={modules}
          effect={effect || 'slide'}
          spaceBetween={spaceBetween}
          loop={loop}
          autoplay={autoPlay ? { delay: autoPlay } : false}
          pagination={pagination ? { clickable: true } : false}
          navigation={
            navigation
              ? {
                  nextEl: '.next-button',
                  prevEl: '.prev-button'
                }
              : false
          }
          centeredSlides={centeredSlides || effect === 'coverflow'}
          slidesPerView={slidesPerView}
          className=""
          {...props}
        >
          {children}
        </Swiper>
        {navigation && <NavigateButton />}
      </div>
    </div>
  );
};

export default CustomSwiper;
