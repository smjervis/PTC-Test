
type StarIconProps = {
  width?: number;
  height?: number;
  strokeWidth?: number;
  fill?: string;
  children?: React.ReactNode;
  className?: string;
  textColor?: string;
};

const StarIcon = ({
  width,
  height,
  fill,
  children,
  textColor,
  className,
}: StarIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />

      <text
        x="50%"
        y="50%"
        fontSize="9"
        textAnchor="middle"
        dy=".-1rem"
        dx="-.2rem"
        className={textColor}
      >
        {children}
      </text>
    </svg>
  );
};

export default StarIcon;
