import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './Blog.jsx';
import Post1 from './post1.jsx';
import Post2 from './Post2.jsx';
import Post3 from './Post3.jsx';
// import HeroSection from './components/HeroSection.jsx'; // Commented out for testing

const App = () => {
  return (
    <Router>
      <div>
        <h1>GreenSource Global</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/blog">Blog</Link>
        </nav>

        <Routes>
          <Route path="/" element={<><h2>Welcome to GreenSource Global</h2>{/* <HeroSection /> */} </>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/post1" element={<Post1 />} />
          <Route path="/blog/post2" element={<Post2 />} />
          <Route path="/blog/post3" element={<Post3 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
