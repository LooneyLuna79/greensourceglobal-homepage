import React from 'react';

const Blog = () => {
  return (
    <div>
      <h1>Welcome to the GreenSource Global Blog</h1>
      <p>
        This is the place where we'll share our latest news, sustainability tips, and updates on our green projects. Stay tuned for more!
      </p>

      <div className="blog-post">
        <h2>Post 1: Our Commitment to Sustainability</h2>
        <img src="/images/sustainability.jpg" alt="Sustainability" className="blog-image" />
        <p>
          GreenSource Global is dedicated to promoting a sustainable future. From renewable energy solutions to eco-friendly farming practices, we are committed to protecting the planet.
        </p>
        <a href="/blog/post1">Read more</a>
      </div>

      <div className="blog-post">
        <h2>Post 2: The Future of Renewable Energy</h2>
        <img src="/images/renewable-energy.jpg" alt="Renewable Energy" className="blog-image" />
        <p>
          Renewable energy is the future, and we're at the forefront of this transformation. Learn how solar, wind, and other green technologies are changing the energy landscape.
        </p>
        <a href="/blog/post2">Read more</a>
      </div>
    </div>
  );
};

export default Blog;
