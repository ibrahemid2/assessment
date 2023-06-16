import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { fetchPost } from '../../services/api';
import { PostDetail } from '../../types/post';

export const PostDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const getPost = async () => {
      setLoading(true);
      setError(null);
      try {
        if (id) {
          const data = await fetchPost(id);
          if (isMounted) {
            setPost(data);
          }
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An error occurred');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    getPost();

    return () => {
      isMounted = false;
    };
  }, [id]);


  return (
    <article className='post-detail-container'>
      <CSSTransition in={!loading} timeout={300} classNames='fade' unmountOnExit>
        <div>
          {post ? (
            <>
              <img src={post.author.avatar} alt={post.author.name} className='post-banner' />
              <div className='post-detail-content'>
                <h2 className='post-title'>{post.title}</h2>
                <div className='post-author-info'>
                  <h3 className='post-author'>{post.author.name}</h3>
                  <span className='post-date'>{new Date(post.publishDate).toLocaleDateString()}</span>
                </div>
                <p className='post-summary'>{post.summary}</p>
                <div className='post-categories'>
                  {post.categories.map((category) => (
                    <span key={category.id} className='category-tag'>
                      {category.name}
                    </span>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div>No post found {error}</div>
          )}
        </div>
      </CSSTransition>

      {loading && (
        <div className='loader-container'>
          <div className='loader' />
        </div>
      )}
    </article>
  );
};