import React, { useContext } from 'react';
import useCustomHook from './useCustomHook';

const PostsContext = React.createContext();

const PostsContextProvider = ({ children }) => {
  const posts = useCustomHook('https://jsonplaceholder.typicode.com/photos');
  return <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>;
};

const usePostsContext = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error('usePostsContext must be used within a PostsContextProvider');
  }
  return context;
};

export { PostsContextProvider, usePostsContext };
