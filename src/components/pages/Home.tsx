import { Link } from 'react-router-dom';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Post } from '../../types/post';
import { PostCategories } from '../common/molecules/PostCategories';

type HomePageProps = {
  posts: Post[];
  handleLoadMore: () => void;
  hasMore: boolean;
};

export const Home = ({ posts, handleLoadMore, hasMore }: HomePageProps) => {
  return (
    <section>
      <TransitionGroup className='posts-container'>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} classNames='fade-animation' timeout={{
            appear: 500,
            enter: 300,
            exit: 500
          }}
          >
            <li style={{ transitionDelay: `${index * 100}ms` }}>
              <img src={post.author.avatar} alt={post.author.name} className='post-avatar' />
              <h2 className='post-title'>{post.title}</h2>
              <h3 className='post-author'>{post.author.name}</h3>
              <PostCategories categories={post.categories} />
              <Link to={`/posts/${post.id}`} className='post-link'>Read More</Link>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>

      {hasMore ? (
        <button className='load-more' onClick={handleLoadMore}>
          Load More
        </button>
      ) : (
        <p className='no-more-posts'>No more posts to load</p>
      )}
    </section>
  );
};
