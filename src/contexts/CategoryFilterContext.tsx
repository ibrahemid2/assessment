import React, { createContext, useState } from 'react';

type CategoryFilterContextProps = {
  selectedCategory: string;
  setCategory: (category: string) => void;
};

export const CategoryFilterContext = createContext<CategoryFilterContextProps>({
  selectedCategory: '',
  setCategory: () => {},
});

type CategoryFilterProviderProps = {
  children: React.ReactNode;
};

export const CategoryFilterProvider: React.FC<CategoryFilterProviderProps> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const setCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <CategoryFilterContext.Provider  value={{ selectedCategory, setCategory }}>
      {children}
    </CategoryFilterContext.Provider>
  );
};
