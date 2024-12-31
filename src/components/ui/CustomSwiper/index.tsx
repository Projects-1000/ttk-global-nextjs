'use client';
import { HTMLAttributes, ReactNode } from 'react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
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
  children: ReactNode;
  isAutoplay?: boolean;
  isFullWidth?: boolean;

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
  children,
  wrapperClass,
  isAutoplay = false,
  isFullWidth = false,
  autoplay,
  ...props
}: CustomSwipperProps) => {
  const modules = [];
  if (pagination) modules.push(Pagination);
  if (navigation) modules.push(Navigation);
  if (isAutoplay || autoplay) modules.push(Autoplay);
  if (props.modules) modules.push(...props.modules);
  console.log('wrapperClass', wrapperClass);
  return (
    <div className={`mx-auto ${wrapperClass && wrapperClass} ${isFullWidth ? 'swiper-fluid' : ''}`}>
      <div className="swiper-container relative max-w-[100vw]">
        <Swiper
          modules={modules}
          effect={effect || 'slide'}
          spaceBetween={spaceBetween}
          loop={loop}
          autoplay={
            isAutoplay
              ? {
                  delay: 0,
                  disableOnInteraction: false,
                  stopOnLastSlide: false
                }
              : false
          }
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
          className="group"
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
