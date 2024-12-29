import { ChevronLeft, ChevronRight } from 'lucide-react';

export const NavigateButton = () => {
  return (
    <div className="absolute left-0 right-0 top-1/2 z-50 hidden w-full -translate-y-1/2 items-center justify-between laptop:flex">
      <div className="prev-button border-primary z-10 h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-solid text-greyscale-border-default duration-200 hover:bg-primary-default hover:text-white active:bg-primary-darker active:text-white">
        <ChevronLeft size={24} />
      </div>
      <div className="next-button border-primary z-10 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-solid text-greyscale-border-default duration-200 hover:bg-primary-default hover:text-white active:bg-primary-darker active:text-white">
        <ChevronRight size={24} />
      </div>
    </div>
  );
};
