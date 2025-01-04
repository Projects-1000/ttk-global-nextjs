import SectionCard from '@/components/ui/Card/SectionCard';
import React from 'react';

const ProjectCounting = () => {
  const description =
    'Trong năm 2025, TTK Global Ventures đang hướng đến mục tiêu tiếp nhận và triển khai tổng số 20 dự án với các đối tác.';
  return (
    <SectionCard customClass="container" title={<ProjectCountingTitle />} description={description}>
      <div className="flex h-[75px] w-full items-center overflow-hidden rounded-full bg-blue-100 text-sm font-semibold text-greyscale-negative body-bold laptop:h-[75px] laptop:h3-bold">
        <div className="flex h-full w-3/5 items-center justify-center rounded-full bg-blue-600 px-l text-center">
          Đã tiếp nhận 12 dự án
        </div>
        <div className="flex h-full w-2/5 items-center justify-center px-l text-center text-blue-600">Còn 8 dự án</div>
      </div>
    </SectionCard>
  );
};
const ProjectCountingTitle = () => (
  <span className="uppercase h3-bold laptop:h1-bold">
    <span className="text-secondary-label">Dự án </span>được triển khai
  </span>
);
export default ProjectCounting;
