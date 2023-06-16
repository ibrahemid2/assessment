import React from 'react';
import { CategoryTag } from '../../atoms/CategoryTag';
import { Category } from '../../../../types/post';

type PostCategoriesProps = {
  categories?: Category[];// i initially used this to get the id but it seems the id in mock data isnt unique
};
export const PostCategories = ({ categories }: PostCategoriesProps) => (
  <div className='post-categories'>
    {categories?.map((category) => (
      <CategoryTag key={category.id} name={category.name} />
    ))}
  </div>
);
