import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllBlogData, deleteBlog } from '../actions/BlogAction';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const blogs = useSelector(state => state.blog.Blog_data);
  const loading = useSelector(state => state.blog.loading);

  useEffect(() => {
    dispatch(getAllBlogData());
  }, [dispatch]);

  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#333',
      color: '#fff',
      padding: '15px 30px',
      fontSize: '18px',
    },
    navButtons: {
      display: 'flex',
      gap: '20px',
    },
    button: {
      background: '#555',
      color: '#fff',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    container: {
      padding: '30px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f6fa',
      minHeight: '100vh',
    },
    insertButton: {
      backgroundColor: '#3498db',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginBottom: '20px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: '#fff',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    th: {
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '12px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
    },
    td: {
      padding: '12px',
      borderBottom: '1px solid #ddd',
      verticalAlign: 'middle',
    },
    actionButton: {
      padding: '6px 10px',
      marginRight: '5px',
      border: 'none',
      borderRadius: '4px',
      color: '#fff',
      cursor: 'pointer',
    },
    view: { backgroundColor: '#3498db' },
    edit: { backgroundColor: '#f1c40f' },
    delete: { backgroundColor: '#e74c3c' },
    image: {
      width: '70px',
      height: 'auto',
      borderRadius: '4px',
    },
  };

  const redirectToProfile = () => {
    navigate("/profile");
  }

  const redirectToLogin = () => {
    sessionStorage.removeItem("adminlogin");
    dispatch({ "type": "LOGOUT" });
    alert("Logout Successfully...");
    navigate("/login");
  }

  const redirectToView = (id) => {
    navigate(`/viewdata/${id}`);
  }

  const redirectToUpdate = (id) => {
    navigate(`/updateform/${id}`);
  }

  const redirectToInsert = () => {
    navigate("/insertform");
  }

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
  }

  return (
    <div>
      <div style={styles.navbar}>
        <div><strong>Admin Dashboard</strong></div>
        <div style={styles.navButtons}>
          <button style={styles.button} onClick={() => navigate("/blog")}>Blog</button>
          <button style={styles.button} onClick={() => navigate("/")}>Admin</button>
          <button style={styles.button} onClick={redirectToProfile}>Profile</button>
          <button style={styles.button} onClick={redirectToLogin}>Logout</button>
        </div>
      </div>

      <div style={styles.container}>
        <button onClick={redirectToInsert} style={styles.insertButton}>+ Add Blog</button>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Id</th>
              <th style={styles.th}>Image</th>
              <th style={styles.th}>Title</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4" style={{ padding: '12px', textAlign: 'center' }}>Loading...</td>
              </tr>
            ) : blogs.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ padding: '12px', textAlign: 'center' }}>No blogs available</td>
              </tr>
            ) : (
              blogs.map((blog) => (
                <tr key={blog.blog_id}>
                  <td style={styles.td}>{blog.blog_id}</td>
                  <td style={styles.td}>
                    <img src={blog.media_url} alt={blog.title} style={styles.image} />
                  </td>
                  <td style={styles.td}>{blog.title}</td>
                  <td style={styles.td}>
                    <button onClick={() => redirectToView(blog.blog_id)} style={{ ...styles.actionButton, ...styles.view }}>View</button>
                    <button onClick={() => redirectToUpdate(blog.blog_id)} style={{ ...styles.actionButton, ...styles.edit }}>Update</button>
                    <button onClick={() => handleDelete(blog.blog_id)} style={{ ...styles.actionButton, ...styles.delete }}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
