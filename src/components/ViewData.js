import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBlogData } from '../actions/BlogAction';

const ViewData = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const blog = useSelector((state) => state.blog.single);

  useEffect(() => {
    dispatch(getSingleBlogData(id));
  }, [dispatch, id]);

  const styles = {
    container: {
      maxWidth: '700px',
      margin: '40px auto',
      padding: '20px',
      backgroundColor: '#fff',
      fontFamily: 'Arial, sans-serif',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    heading: {
      fontSize: '26px',
      marginBottom: '15px',
    },
    image: {
      width: '100%',
      height: 'auto',
      marginBottom: '20px',
      borderRadius: '8px',
    },
    paragraph: {
      fontSize: '16px',
      marginBottom: '15px',
      lineHeight: '1.6',
    },
    backBtn: {
      padding: '10px 20px',
      backgroundColor: '#3498db',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  if (!blog) return <div style={styles.container}>Loading...</div>;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{blog.title}</h2>
      <img src={blog.media_url} alt="Blog" style={styles.image} />
      <p style={styles.paragraph}><strong>Description:</strong> {blog.description}</p>
      <p style={styles.paragraph}><strong>Likes:</strong> {blog.likes_count}</p>
      <button onClick={() => navigate(-1)} style={styles.backBtn}>Back</button>
    </div>
  );
};

export default ViewData;
