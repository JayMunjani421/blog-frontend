import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminProfile } from '../actions/AdminAction';

const Profile = () => {
  const dispatch = useDispatch();
  
  const adminProfile = useSelector(state => state.admin.adminProfile);

  useEffect(() => {
    dispatch(getAdminProfile());
  }, [dispatch]);

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
    detail: {
      fontSize: '18px',
      marginBottom: '10px',
      lineHeight: '1.6',
    },
    backBtn: {
      padding: '10px 20px',
      backgroundColor: '#3498db',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '20px',
    },
  };

  if (!adminProfile) return <div style={styles.container}>Loading...</div>;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Admin Profile</h2>
      <p style={styles.detail}><strong>Name:</strong> {adminProfile.username}</p>
      <p style={styles.detail}><strong>Email:</strong> {adminProfile.admin_email}</p>
      <p style={styles.detail}><strong>Password:</strong> {adminProfile.password}</p>

      <button
        style={styles.backBtn}
        onClick={() => window.history.back()}
      >
        Back
      </button>
    </div>
  );
};

export default Profile;
