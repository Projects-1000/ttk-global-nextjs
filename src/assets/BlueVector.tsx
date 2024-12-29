import { VectorProps } from './YellowVector';

export const BlueVector: React.FC<VectorProps> = ({ width = 1137, height = 1614 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_237_360)">
        <path
          d="M414.35 414.55C348.076 487.916 323.976 662.407 299.876 842.848C275.776 1025.27 251.676 1211.66 302.286 1298.91C352.895 1388.13 479.42 1376.24 585.459 1425.81C692.704 1477.36 778.258 1590.39 875.863 1600.3C972.263 1610.22 1081.92 1515.04 1131.32 1366.32C1181.93 1219.59 1172.29 1017.34 1145.78 830.951C1119.27 644.562 1074.69 472.053 996.362 404.635C919.243 335.235 808.383 366.961 698.729 368.944C589.074 370.927 480.625 341.184 414.35 414.55Z"
          fill="url(#paint0_linear_237_360)"
          fillOpacity="0.6"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_237_360"
          x="-87.5"
          y="0"
          width={width}
          height={height}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="180" result="effect1_foregroundBlur_237_360" />
        </filter>
        <linearGradient
          id="paint0_linear_237_360"
          x1="1167.5"
          y1="1601.01"
          x2="-10.0447"
          y2="751.777"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EBECFA" />
          <stop offset="0.5" stopColor="#D7DAF4" />
          <stop offset="1" stopColor="#868FDF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
