'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  EffectFlip,
  EffectCards,
  EffectCreative
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';
import './index.scss';
type CustomSwipperProps<T> = {
  Card: React.FC<T>;
  listData: T[];
  loop?: boolean;
  dots?: boolean;
  slidesPerView?: number;
  effect?: 'fade' | 'cube' | 'coverflow' | 'flip' | 'cards' | 'creative';
  spaceBetween?: number;
  centeredSlides?: boolean;
};

const CustomSwiper = <T,>({
  Card,
  listData,
  loop = true,
  dots = true,
  slidesPerView = 1,
  effect,
  centeredSlides = false,
  spaceBetween = 30
}: CustomSwipperProps<T>) => {
  return (
    <div className="swiper-container max-w-full px-4xl">
      <div className="nav-button prev-button border-primary z-10 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border duration-200 hover:bg-primary-default hover:text-white active:bg-primary-darker active:text-white">
        <ChevronLeft size={24} />
      </div>
      <div className="nav-button next-button border-primary z-10 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border duration-200 hover:bg-primary-default hover:text-white active:bg-primary-darker active:text-white">
        <ChevronRight size={24} />
      </div>

      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFade,
          EffectCube,
          EffectCoverflow,
          EffectFlip,
          EffectCards,
          EffectCreative
        ]}
        effect={effect}
        spaceBetween={spaceBetween}
        loop={loop}
        coverflowEffect={
          effect === 'coverflow'
            ? {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false
              }
            : {}
        }
        pagination={dots ? { clickable: true } : false}
        navigation={{
          nextEl: '.next-button',
          prevEl: '.prev-button'
        }}
        centeredSlides={centeredSlides || effect === 'coverflow'}
        slidesPerView={slidesPerView}
        style={{ height: 'auto', padding: '20px 0' }}
      >
        {listData.map((data, index) => (
          <SwiperSlide key={index}>
            <Card {...(data as React.PropsWithChildren<T>)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
