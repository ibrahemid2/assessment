import React from 'react';

type IconProps = {
  size?: number;
};

const HomeIcon = ({ size = 24 }: IconProps) => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox={`0 0 26 28`} fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' style={{ width: size, height: size, verticalAlign: 'middle' }}>
      <path d='M3 10l9-9 9 9-9 9'></path>
      <path d='M6 10V20H18V10'></path>
    </svg>
);

export default HomeIcon;
