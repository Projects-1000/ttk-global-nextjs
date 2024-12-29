import { ChevronLeft, ChevronRight } from 'lucide-react';
import './index.scss';

export const NavigateButton = () => {
  return (
    <div className="absolute left-0 right-0 top-1/2 z-50 hidden w-full -translate-y-1/2 items-center justify-between laptop:flex">
      <div className="prev-button navigate-button border-primary laptop:translate-x-3 desktop:-translate-x-16">
        <ChevronLeft size={24} />
      </div>
      <div className="next-button navigate-button border-primary laptop:-translate-x-3 desktop:translate-x-16">
        <ChevronRight size={24} />
      </div>
    </div>
  );
};
