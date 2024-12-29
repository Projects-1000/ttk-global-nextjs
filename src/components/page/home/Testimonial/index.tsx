'use client';
import SectionCard from '@/components/ui/Card/SectionCard';
import TestimonialCard from '@/components/ui/Card/TestimonialCard';
import CustomSwiper from '@/components/ui/CustomSwiper';
import { SwiperSlide } from 'swiper/react';
import './index.scss'

const TESTIMONIAL_DATA = [
  {
    id: 1,
    content:
      'The team delivered exceptional results! Their dedication and expertise truly transformed our business and exceeded all expectations.',
    customerName: 'Nguyen Van A',
    customerPosition: 'CEO, ABC Corp',
    customerImage: 'https://via.placeholder.com/70'
  },
  {
    id: 2,
    content:
      'Working with this team has been an absolute pleasure. Their professionalism and attention to detail are unmatched.',
    customerName: 'Tran Thi B',
    customerPosition: 'Marketing Manager, XYZ Ltd',
    customerImage: 'https://via.placeholder.com/70'
  },
  {
    id: 3,
    content:
      'We were amazed by the creativity and innovation displayed in their work. Our project was a huge success thanks to them!',
    customerName: 'Pham Van C',
    customerPosition: 'Founder, StartUp Inc',
    customerImage: 'https://via.placeholder.com/70'
  }
];

const Testimonial = () => {
  const description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dignissim nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';

  return (
    <SectionCard title={<TestimonialTitle />} description={description}>
      <CustomSwiper
        breakpoints={{
          370: {
            slidesPerView: 1.15
          },
          768: {
            slidesPerView: 2.15
          },
          1024: {
            slidesPerView: 2
          },
          1440: {
            slidesPerView: 2
          }
        }}
        wrapperClass="laptop:w-[calc(100%-120px)]"
      >
        {TESTIMONIAL_DATA.map((testimonial) => (
          <SwiperSlide className="" key={testimonial.id}>
            <TestimonialCard
              customerName={testimonial.customerName}
              customerPosition={testimonial.customerPosition}
              customerImage={testimonial.customerImage}
              content={testimonial.content}
            />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </SectionCard>
  );
};

const TestimonialTitle = () => (
  <p className="">
    <span className="text-secondary-label">PHẢN HỒI</span> TỪ KHÁCH HÀNG
  </p>
);

export default Testimonial;
