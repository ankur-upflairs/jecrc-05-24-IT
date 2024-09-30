import React from 'react';

const BlogPost = (props) => {
  const { title, author, date, content, tags, category } = props;

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h2>{title}</h2>
          <small className="text-muted">By {author} on {date}</small>
        </div>
        <div className="card-body">
          <h5 className="card-title">Category: {category}</h5>
          <p className="card-text">{content}</p>
          <div className="tags mt-3">
            <h6>Tags:</h6>
            {tags.map((tag, index) => (
              <span key={index} className="badge bg-primary me-2">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
