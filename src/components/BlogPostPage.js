import { useState } from "react";


const BlogPostPage = ({ title, description, fullDescription, author, date }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="blog-card">
      <h2>{title}</h2>
      
      <p className="description">
        {expanded ? fullDescription : description}
      </p>
      
      <button className="read-more-btn" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show Less" : "Read More"}
      </button>
      <p className="meta">
        By <strong>{author}</strong> | {new Date(date).toLocaleDateString()}
      </p>
    </div>
  );
};

export default BlogPostPage;
