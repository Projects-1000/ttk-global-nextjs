import { ChevronLeft, ChevronRight } from 'lucide-react';
import './index.scss';

export interface NavigateButtonProps {
  isMobileShow?: boolean;
  isBeginning?: boolean;
  isEnd?: boolean;
}
export const NavigateButton: React.FC<NavigateButtonProps> = ({ isMobileShow = false, isBeginning, isEnd }) => {
  return (
    <div
      className={`swiper-nav-button absolute left-0 right-0 top-1/2 z-50 ${!isMobileShow && 'hidden'} flex w-full -translate-y-1/2 items-center justify-between`}
    >
      <button
        disabled={isBeginning}
        aria-disabled={isBeginning}
        className={`swiper-nav-button__left ${isBeginning && 'pointer-events-none bg-greyscale-surface-disable text-greyscale-disable opacity-30'} prev-button navigate-button border-primary bg-transparent laptop:-translate-x-[3.75rem] desktop:-translate-x-[4.75rem]`}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        disabled={isEnd}
        aria-disabled={isEnd}
        className={`swiper-nav-button__right ${isEnd && 'pointer-events-none bg-greyscale-surface-disable text-greyscale-disable opacity-30'} next-button navigate-button border-primary bg-transparent laptop:translate-x-[3.75rem] desktop:translate-x-[4.75rem]`}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};
