import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { insertBlog } from '../actions/BlogAction';

const InsertForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [title, setTitle] = useState('');
  const [mediaUrl, setMediaUrl] = useState(null); 
  const [preview, setPreview] = useState(null); 
  const [description, setDescription] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setMediaUrl(file);
    setPreview(URL.createObjectURL(file)); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !mediaUrl) {
      alert('Please fill all fields');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('media_url', mediaUrl); 

    dispatch(insertBlog(formData, navigate));
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
    insert: { backgroundColor: '#3498db' },
    cancel: { backgroundColor: '#e74c3c' }
  };

  return (
    <div style={styles.page}>
      <form onSubmit={handleSubmit} style={styles.formContainer}>
        <div style={styles.heading}>Insert Blog</div>

        <label style={styles.label}>Title</label>
        <input type="text" style={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} />

        <label style={styles.label}>Media</label>
        <input type="file" style={styles.input} onChange={handleImageChange} />
        {preview && <img src={preview} alt="Preview" style={styles.imagePreview} />}

        <label style={styles.label}>Description</label>
        <textarea rows="5" style={styles.input} value={description} onChange={(e) => setDescription(e.target.value)} />

        <div style={styles.buttonRow}>
          <button type="submit" style={{ ...styles.button, ...styles.insert }}>Insert</button>
          <button type="button" onClick={() => navigate(-1)} style={{ ...styles.button, ...styles.cancel }}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default InsertForm;
