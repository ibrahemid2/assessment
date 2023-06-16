import React from 'react';
import BackIcon from '../../atoms/BackIcon';
import HomeIcon from '../../atoms/HomeIcon';

type TitleProps = {
  title: string;
  showArrow: boolean;
};

export const PageTitle = ({ title, showArrow }: TitleProps) => {
  return (
    <h1 className={'header-title'}>
      {showArrow ? <BackIcon size={24} /> : <HomeIcon size={24} />}
      {title}
    </h1>
  );
};
