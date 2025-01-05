import { SVGProps } from 'react';

export const TagFilterIcon = ({ className, width, height, fill, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={className}
      width={width || 20}
      height={height || 20}
      viewBox="0 0 20 21"
      fill={fill || 'none'}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4.16699 10.4917L4.16699 3.82503" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
      <path d="M15.833 17.1582L15.833 15.4915" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
      <path d="M4.16699 17.1582L4.16699 13.8249" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
      <path d="M15.833 10.4917L15.833 3.82503" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
      <path d="M10 6.3252L10 3.8252" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
      <path d="M10 17.1582L10 10.4915" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
      <ellipse
        cx="4.16667"
        cy="12.1584"
        rx="1.66667"
        ry="1.66667"
        stroke="#33363F"
        stroke-width="2"
        stroke-linecap="round"
      />
      <ellipse
        cx="9.99967"
        cy="7.99186"
        rx="1.66667"
        ry="1.66667"
        stroke="#33363F"
        stroke-width="2"
        stroke-linecap="round"
      />
      <ellipse
        cx="15.8337"
        cy="12.9919"
        rx="1.66667"
        ry="1.66667"
        stroke="#33363F"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
