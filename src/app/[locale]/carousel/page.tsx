'use client';
import CustomSwiper from '@/components/ui/CustomSwiper';
import CaseStudy, { CaseStudyProps } from '@/components/CaseStudy';
import React from 'react';

const CarouselPage = () => {
  const caseStudyData = [
    {
      projectName: 'Dự án 1',
      description: 'Mô tả ngắn gọn về dự án 1.',
      tags: ['Marketing', 'Tech', 'Startup'],
      previousRevenue: '100 triệu VND',
      postRevenue: '500 triệu VND',
      image:
        'https://res.cloudinary.com/dh6bfx865/image/upload/v1735057043/ttk-global/carousel-so-lieu-20241128045841-ernrx_1_dvf0dm.png'
    },
    {
      projectName: 'Dự án 2',
      description: 'Mô tả ngắn gọn về dự án 2.',
      tags: ['Finance', 'Innovation'],
      previousRevenue: '200 triệu VND',
      postRevenue: '700 triệu VND',
      image:
        'https://res.cloudinary.com/dh6bfx865/image/upload/v1735057043/ttk-global/carousel-so-lieu-20241128045841-ernrx_1_dvf0dm.png'
    },
    {
      projectName: 'Dự án 3',
      description: 'Mô tả ngắn gọn về dự án 3.',
      tags: ['E-commerce', 'Growth'],
      previousRevenue: '300 triệu VND',
      postRevenue: '1 tỷ VND',
      image:
        'https://res.cloudinary.com/dh6bfx865/image/upload/v1735057043/ttk-global/carousel-so-lieu-20241128045841-ernrx_1_dvf0dm.png'
    },
    {
      projectName: 'Dự án 3',
      description: 'Mô tả ngắn gọn về dự án 3.',
      tags: ['E-commerce', 'Growth'],
      previousRevenue: '300 triệu VND',
      postRevenue: '1 tỷ VND',
      image:
        'https://res.cloudinary.com/dh6bfx865/image/upload/v1735057043/ttk-global/carousel-so-lieu-20241128045841-ernrx_1_dvf0dm.png'
    },
    {
      projectName: 'Dự án 3',
      description: 'Mô tả ngắn gọn về dự án 3.',
      tags: ['E-commerce', 'Growth'],
      previousRevenue: '300 triệu VND',
      postRevenue: '1 tỷ VND',
      image:
        'https://res.cloudinary.com/dh6bfx865/image/upload/v1735057043/ttk-global/carousel-so-lieu-20241128045841-ernrx_1_dvf0dm.png'
    }
  ];
  return (
    <div className="mx-20">
      <CustomSwiper<CaseStudyProps>
        Card={CaseStudy}
        listData={caseStudyData}
        loop={true}
        dots={true}
        slidesPerView={1.5}
        spaceBetween={60}
        effect="coverflow"
      />
    </div>
  );
};

export default CarouselPage;
