import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Blog from './Blog.jsx';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Blog from './Blog.jsx';
import Post1 from './post1.jsx';
import Post2 from './Post2.jsx';
import Post3 from './Post3.jsx';

const App = () => {
  return (
    <div>
      <h1>GreenSource Global</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/blog">Blog</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Welcome to GreenSource Global!</h2>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/post1" element={<Post1 />} />
        <Route path="/blog/post2" element={<Post2 />} />
        <Route path="/blog/post3" element={<Post3 />} />
      </Routes>
    </div>
  );
};

export default App;

