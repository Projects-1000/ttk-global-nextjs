import { TtkFrame } from '@/assets/TtkFrame';
import React from 'react';

const TargetPartnerHeadingCard = () => {
  const title = 'Đối tác tiềm năng';
  return (
    <div className="relative flex aspect-square w-full cursor-pointer items-end overflow-hidden bg-blue-500 p-2xl laptop:p-4xl">
      <div className="absolute bottom-0 right-0 z-0 translate-y-[18%] laptop:translate-y-0 translate-x-[30%] scale-[0.6]">
        <TtkFrame fillOpacity={1} />
      </div>
      <div className="z-10 max-w-[300px] uppercase text-greyscale-negative h4-bold laptop:h1-bold">{title}</div>
    </div>
  );
};

export default TargetPartnerHeadingCard;
