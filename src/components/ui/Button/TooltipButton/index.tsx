import { ReactNode } from 'react';

interface TooltipButtonProps {
  content: ReactNode | string;
  children: ReactNode;
}

const TooltipButton = ({ children, content }: TooltipButtonProps) => {
  return (
    <div className="group relative w-full max-w-[720px]">
      <div className="absolute left-1/2 top-[-160%] hidden w-full -translate-x-1/2 translate-y-2 rounded-s bg-greyscale-negative p-2xs opacity-0 transition-all delay-[350ms] duration-100 ease-in-out group-hover:block group-hover:translate-y-0 group-hover:opacity-100 tablet:p-xs laptop:p-s">
        {content}
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default TooltipButton;
