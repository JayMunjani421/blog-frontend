import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBlogData, updateBlog } from '../actions/BlogAction';

const UpdateForm = () => {
  const { id } = useParams();  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const blog = useSelector(state => state.blog.single);
 
  const [title, setTitle] = useState('');
  const [mediaUrl, setMediaUrl] = useState(null);
  const [preview, setPreview] = useState(null);
  const [description, setDescription] = useState('');

  useEffect(() => {
    dispatch(getSingleBlogData(id)); 
  }, [id, dispatch]);

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setDescription(blog.description);
      setPreview(blog.media_url);
    }
  }, [blog]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setMediaUrl(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title || !description) {
      alert('Please fill all fields');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('media_url', mediaUrl); 

    dispatch(updateBlog(id, formData, navigate));
  };

  const styles = {
    page: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f4f4f4',
      fontFamily: 'Arial, sans-serif'
    },
    formContainer: {
      background: '#fff',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      width: '400px',
      border: '1px solid #ccc'
    },
    heading: {
      fontSize: '22px',
      textAlign: 'center',
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold'
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      borderRadius: '4px',
      border: '1px solid #ccc'
    },
    imagePreview: {
      width: '100%',
      height: 'auto',
      marginBottom: '15px',
      borderRadius: '5px'
    },
    buttonRow: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    button: {
      padding: '10px',
      width: '48%',
      borderRadius: '4px',
      border: 'none',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer'
    },
    update: { backgroundColor: '#3498db' },
    cancel: { backgroundColor: '#e74c3c' }
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.page}>
      <form onSubmit={handleSubmit} style={styles.formContainer}>
        <div style={styles.heading}>Update Blog</div>

        <label style={styles.label}>Title</label>
        <input
          type="text"
          style={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label style={styles.label}>Media</label>
        <input
          type="file"
          style={styles.input}
          onChange={handleImageChange}
        />
        {preview && <img src={preview} alt="Preview" style={styles.imagePreview} />}

        <label style={styles.label}>Description</label>
        <textarea
          rows="5"
          style={styles.input}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div style={styles.buttonRow}>
          <button type="submit" style={{ ...styles.button, ...styles.update }}>Update</button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            style={{ ...styles.button, ...styles.cancel }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
