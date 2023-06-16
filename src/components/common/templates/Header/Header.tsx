// Create Header component
import React, { ChangeEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Select } from '../../atoms/Select';
import { Pages } from '../../../../types/pages';
import { CSSTransition } from 'react-transition-group';
import { PageTitle } from '../../molecules/PageTitle';
import { Category } from '../../../../types/post';

type HeaderProps = {
  selectedCategory: string;
  handleCategoryChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  categories: Category[];
};

export const Header = ({ selectedCategory, handleCategoryChange,categories }: HeaderProps) => {
  const location = useLocation();
  const isPostsPage = location.pathname === '/';
  const pageTitle: Pages = isPostsPage ? Pages.Posts : Pages.Details;

  return (
    <header>
      <Link to={'/'} className='back-link'>
        <PageTitle title={pageTitle} showArrow={!isPostsPage} />
      </Link>
      <CSSTransition in={isPostsPage} timeout={300} classNames='select' unmountOnExit>
        <Select selectedOption={selectedCategory} handleOptionChange={handleCategoryChange} options={categories} />
      </CSSTransition>

    </header>
  );
};