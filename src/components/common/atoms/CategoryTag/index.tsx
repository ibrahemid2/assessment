import React, { useContext } from 'react';
import { CategoryFilterContext } from '../../../../contexts/CategoryFilterContext';

type CategoryTagProps = {
  name: string;
};

export const CategoryTag = ({ name }: CategoryTagProps) => {
  const { setCategory } = useContext(CategoryFilterContext);

  const handleClick = () => {
    setCategory(name);
  };

  return (
    <span className='category-tag' onClick={handleClick}>
      {name}
    </span>
  );
};
