import { SVGProps } from 'react';

export const ArrowDropDownIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={`arrow-down-icon ${className}`}
      width="9"
      height="6"
      viewBox="0 0 9 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.91317 5.76953L0.198681 1.31215C-0.235537 0.791085 0.134988 -4.31825e-07 0.813258 -4.02177e-07L7.39719 -1.14384e-07C8.07546 -8.47357e-08 8.44599 0.791085 8.01177 1.31215L4.29728 5.76953C4.19733 5.88947 4.01312 5.88947 3.91317 5.76953Z"
        fill={props.fill || '#5C5E70'}
      />
    </svg>
  );
};
