import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div>
      <h1>Welcome to the GreenSource Global Blog</h1>
      <p>This is the place where we'll share our latest news and insights.</p>

      <div className="blog-post">
        <h2>Post 1: Our Commitment to Sustainability</h2>
        <img src="/public/images/file_00000000d47461f7a76de98a57cd13a2_conversation_id=67f704e8-3610-8004-9eef-220c964bdcc8&message_id=3ae58b75-3808-4e39-af91-4304025da0cb (1) (1).png" alt="Sustainability Image">
        <p>GreenSource Global is dedicated to building a sustainable future...</p>
        <Link to="/blog/post1">Read more</Link>
      </div>

      <div className="blog-post">
        <h2>Post 2: Why Renewable Energy Matters</h2>
        <img src="/images/renewable.jpg" alt="Renewable Energy Image">
        <p>Renewable energy isn't just a trend; it's a necessity...</p>
        <Link to="/blog/post2">Read more</Link>
      </div>

      <div className="blog-post">
        <h2>Post 3: Exploring Innovative Green Technologies</h2>
        <img src="/images/innovation.jpg" alt="Green Innovation Image">
        <p>We're constantly exploring new technologies to help our planet...</p>
        <Link to="/blog/post3">Read more</Link>
      </div>
    </div>
  );
};

export default Blog;


