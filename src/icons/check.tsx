type CheckIconProps = {
  width?: number;
  height?: number;
  strokeWidth?: number;
  fill?: string;
  className?: string;
};

const CheckIcon = ({
  width = 24,
  height = 24,
  fill,
  className,
}: CheckIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_173_44)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.3777 2.05363C24.1075 2.65675 24.2103 3.7373 23.6071 4.46712L9.82428 21.1458L9.82013 21.1507C9.50662 21.5272 9.11316 21.8291 8.66835 22.0345C8.22353 22.2397 7.73856 22.3434 7.2487 22.3375C6.75082 22.3314 6.25927 22.2126 5.81391 21.9899C5.37005 21.7679 4.98204 21.4487 4.6788 21.0559C4.67777 21.0546 4.67676 21.0532 4.67573 21.0518L0.361067 15.5045C-0.220195 14.7572 -0.0855656 13.6801 0.661772 13.0988C1.40911 12.5176 2.48616 12.6522 3.06742 13.3996L7.29069 18.8294L20.9642 2.28307C21.5672 1.55326 22.6479 1.45053 23.3777 2.05363Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_173_44">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckIcon;
