'use client';
import SectionCard from '@/components/ui/Card/SectionCard';
import TestimonialCard from '@/components/ui/Card/TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
      <div className="flex items-center gap-10">
        <div className="container prev-button border-primary z-10 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-solid text-greyscale-border-default duration-200 hover:bg-primary-default hover:text-white active:bg-primary-darker active:text-white">
          <ChevronLeft size={24} />
        </div>
        <div className="max-w-[1120px]">
          <Swiper
            modules={[Navigation]}
            slidesPerView={2}
            spaceBetween={30}
            className="relative"
            navigation={{
              nextEl: '.next-button',
              prevEl: '.prev-button'
            }}
            loop={true}
          >
            {TESTIMONIAL_DATA.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard
                  customerName={testimonial.customerName}
                  customerPosition={testimonial.customerPosition}
                  customerImage={testimonial.customerImage}
                  content={testimonial.content}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="next-button border-primary z-10 flex h-[40px] w-[40px] flex-none cursor-pointer items-center justify-center rounded-full border border-solid text-greyscale-border-default duration-200 hover:bg-primary-default hover:text-white active:bg-primary-darker active:text-white">
          <ChevronRight size={24} />
        </div>
      </div>
    </SectionCard>
  );
};

const TestimonialTitle = () => (
  <p className="">
    <span className="text-secondary-label">PHẢN HỒI</span> TỪ KHÁCH HÀNG
  </p>
);

export default Testimonial;
