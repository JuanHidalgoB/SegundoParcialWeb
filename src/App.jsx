import PostsList from './PostsList';
import {PostsContextProvider} from './PostsContext';

function App() {
  return (
    <div className="App">
      <PostsContextProvider>
        <h1>POSTS</h1>
        <br />
        <PostsList />
      </PostsContextProvider>
    </div>
  );
}

export default App;

