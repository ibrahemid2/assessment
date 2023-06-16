// src/components/common/atoms/Select/index.tsx
import React, { ChangeEvent } from 'react';
import { Category } from '../../../../types/post';

type SelectProps = {
  selectedOption: string;
  handleOptionChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: Category[];
};

export const Select = ({ selectedOption, handleOptionChange, options }: SelectProps) => (
  <select value={selectedOption} onChange={handleOptionChange}>
    <option value=''>All Categories</option>
    {options.map((option) => (
      <option key={option.id} value={option.name}>
        {option.name}
      </option>
    ))}
  </select>
);
