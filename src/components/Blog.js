import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogData } from '../actions/BlogAction';

const Blog = () => {
  const dispatch = useDispatch();
  const { Blog_data, loading } = useSelector((state) => state.blog);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    dispatch(getAllBlogData());
  }, [dispatch]);

  const styles = {
    container: {
      textAlign: 'center',
      color: '#333',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    },
    blogsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '20px'
    },
    blogCard: {
      width: '300px',
      textDecoration: 'none',
      color: 'inherit',
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s ease-in-out',
    },
    blogCardHover: {
      transform: 'scale(1.02)'
    },
    blogImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover'
    },
    blogContent: {
      padding: '15px',
      textAlign: 'left'
    },
    blogTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px'
    },
    likes: {
      color: '#e74c3c'
    }
  };

  return (
    <div style={styles.container}>
      <h1>All Blogs</h1>

      {loading ? (
        <p>Loading blogs...</p>
      ) : (
        <div style={styles.blogsContainer}>
          {Blog_data.map((blog, index) => (
            <Link
              key={blog.blog_id}
              to={`/blog/${blog.blog_id}`}
              style={{
                ...styles.blogCard,
                ...(hoveredCard === index ? styles.blogCardHover : {})
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img src={blog.media_url} alt="Blog" style={styles.blogImage} />
              <div style={styles.blogContent}>
                <div style={styles.blogTitle}>{blog.title}</div>
                <div style={styles.likes}>❤️ {blog.likes_count} Likes</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
