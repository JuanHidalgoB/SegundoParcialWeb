import { usePostsContext } from './PostsContext';
import { useState, useEffect } from 'react';

const PAGE_SIZE = 10;

const PostsList = () => {
  const { posts } = usePostsContext();
  const [visiblePosts, setVisiblePosts] = useState([]);

  useEffect(() => {
    setVisiblePosts(posts.slice(0, PAGE_SIZE));
  }, [posts]);

  const handleScroll = () => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;

    if (bottom) {
      setVisiblePosts(posts.slice(0, visiblePosts.length + PAGE_SIZE));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visiblePosts]);

  return (
    <div className="posts-list">
      {visiblePosts.map((post) => (
        <div key={post.id} className="post">
          <img src={post.url} alt={post.title} />
          <h2>{post.title}</h2>
          <p>id: {post.id}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;

