import { Check, LoaderCircle } from 'lucide-react';
import React from 'react';

const CheckIcon = () => {
  return (
    <div className="h-[32px] w-[32px]">
      <div className="relative h-full w-full rounded-full">
        <LoaderCircle
          strokeWidth={1.5}
          size={28}
          className="absolute left-1/2 top-1/2 z-0 h-fit w-fit -translate-x-1/2 -translate-y-1/2 rounded-full text-primary-default"
        />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold text-primary-default">
          <Check className="z-10 rounded-full" strokeWidth={3} size={20} />
        </span>
      </div>
    </div>
  );
};

export default CheckIcon;
