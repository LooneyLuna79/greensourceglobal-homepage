import React from 'react';

const Blog = () => {
  return (
    <div>
      <h1>Welcome to the GreenSource Global Blog</h1>
      <p>This is the place where we'll share updates, insights, and tips about sustainable living, green technology, and our mission.</p>

      <div className="blog-post">
        <h2>Post 1: Our Commitment to Sustainability</h2>
        <img src="/images/sustainability.jpg" alt="Sustainability" width="400" />
        <p>GreenSource Global is dedicated to building a cleaner, greener future for all. From renewable energy initiatives to eco-friendly products, we're here to make an impact.</p>
        <a href="/blog/post1">Read more</a>
      </div>

      <div className="blog-post">
        <h2>Post 2: Why Renewable Energy Matters</h2>
        <img src="/images/renewable.jpg" alt="Renewable Energy" width="400" />
        <p>Renewable energy isn't just a trend — it's the key to preserving our planet for future generations. Learn how we support sustainable energy solutions globally.</p>
        <a href="/blog/post2">Read more</a>
      </div>

      <div className="blog-post">
        <h2>Post 3: Tips for a Greener Lifestyle</h2>
        <img src="/images/green-living.jpg" alt="Green Living" width="400" />
        <p>Small actions lead to big changes. Check out our practical tips for reducing waste, saving energy, and living a more eco-friendly life starting today.</p>
        <a href="/blog/post3">Read more</a>
      </div>
    </div>
  );
};

export default Blog;

