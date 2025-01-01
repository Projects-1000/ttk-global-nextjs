import { SVGProps } from 'react';

const LoadMoreIcon = ({ className, width, height, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width || '15'}
      height={height || '15'}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`load-more-icon ${className}`}
      {...props}
    >
      <path d="M13.5 7.2876L7.5 13.2876L1.5 7.2876" stroke="#3C4BCC" strokeWidth="2" />
      <path d="M13.5 1.2876L7.5 7.2876L1.5 1.2876" stroke="#868FDF" strokeWidth="2" />
    </svg>
  );
};

export default LoadMoreIcon;
