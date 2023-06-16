import React from 'react';

type IconProps = {
  size?: number;
};

const BackIcon = ({ size = 24 }: IconProps) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0  24 28' fill='none' stroke='currentColor' strokeWidth='2'
       strokeLinecap='round' strokeLinejoin='round' style={{ width: size, height: size, verticalAlign: 'middle' }}>
    <path d='M19 12H5M12 19l-7-7 7-7' />
  </svg>
);

export default BackIcon;
