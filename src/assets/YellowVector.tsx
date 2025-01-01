export type VectorProps = {
  width?: number;
  height?: number;
};
export const YellowVector: React.FC<VectorProps> = ({ width = 1137, height = 1614 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_237_365)">
        <path
          d="M672.871 399.279C721.522 452.106 739.213 577.75 756.904 707.676C774.595 839.031 792.287 973.241 755.135 1036.06C717.984 1100.31 625.105 1091.75 547.263 1127.44C468.538 1164.56 405.734 1245.94 334.084 1253.08C263.32 1260.22 182.825 1191.69 146.558 1084.61C109.406 978.952 116.483 833.32 135.943 699.11C155.403 564.9 188.132 440.684 245.628 392.14C302.24 342.168 383.62 365.012 464.115 366.44C544.61 367.868 624.22 346.451 672.871 399.279Z"
          fill="url(#paint0_linear_237_365)"
          fillOpacity="0.7"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_237_365"
          x="-240"
          y="0"
          width={width}
          height={height}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="180" result="effect1_foregroundBlur_237_365" />
        </filter>
        <linearGradient
          id="paint0_linear_237_365"
          x1="120"
          y1="1253.59"
          x2="972.931"
          y2="626.488"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFDE5" />
          <stop offset="0.5" stopColor="#FFFBCC" />
          <stop offset="1" stopColor="#FFF266" />
        </linearGradient>
      </defs>
    </svg>
  );
};
