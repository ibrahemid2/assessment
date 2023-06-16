import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '../styles/index.css';
import { Home } from './pages/Home';
import { PostDetails } from './pages/PostDetails';
import { Category, Post } from '../types/post';
import { fetchCategories, fetchPosts } from '../services/api';
import { Header } from './common/templates/Header/Header';
import { CategoryFilterContext } from '../contexts/CategoryFilterContext';


const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const { selectedCategory, setCategory } = useContext(CategoryFilterContext);


  useEffect(() => {
    const fetchData = async () => {
      try {
        if (page === 1) {
          const { categories } = await fetchCategories();
          setCategories(categories);
        }


        const data = await fetchPosts(page, selectedCategory);

        setPosts((prevPosts) => [...prevPosts, ...data.posts]);
        setHasMore(data.hasMore);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [page]);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };


  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.categories.some((category) => category.name === selectedCategory))
    : posts;

  return (
    <Router>
      <Header selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} categories={categories} />
      <Routes>
        <Route path='/'
               element={<Home posts={filteredPosts} handleLoadMore={handleLoadMore} hasMore={hasMore} />} />
        <Route path='/posts/:id' element={<PostDetails />} />
      </Routes>

    </Router>
  );
};

export default App;
