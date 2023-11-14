type RightArrowIconProps = {
  width?: number;
  height?: number;
  strokeWidth?: number;
  fill?: string;
  className?: string;
};

const RightArrowIcon = ({
  width = 24,
  height = 14,
  fill,
  className,
}: RightArrowIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      width={width}
      height={height}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};

export default RightArrowIcon;
