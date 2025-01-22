import React from 'react';
import blogImage from "../Asset/blog.png";

const Blog = () => {
  return (
    <div>
      <div className="about-image">
        <img src={blogImage} alt="blog" />
      </div>

      {/* Horizontal Line placed after the image */}
     

      {/* Blog Text or Content */}
      <p>Welcome to our blog. Here you can find the latest updates and insights.</p>
      <hr style={{ border: '2px solid #ccc', margin: '20px 0' }} />
    </div>
  );
};

export default Blog;
