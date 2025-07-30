import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adminLogin } from '../actions/AdminAction';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [useremail, setUseremail] = useState('');
  const [password, setPassword] = useState('');

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
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      width: '300px',
      textAlign: 'center',
      border: '1px solid #ccc'
    },
    heading: {
      fontSize: '24px',
      marginBottom: '30px'
    },
    label: {
      display: 'block',
      textAlign: 'left',
      marginBottom: '6px',
      fontWeight: 'bold'
    },
    input: {
      width: '90%',
      padding: '10px',
      marginBottom: '20px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '14px'
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#3498db',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer'
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const params = {
      admin_email: useremail,
      password: password,
    };

    dispatch(adminLogin(params, navigate)); 
  };

  return (
    <div style={styles.page}>
      <form method="POST" style={styles.formContainer} onSubmit={handleSubmit}>
        <h2 style={styles.heading}>Admin Login</h2>

        <label htmlFor="email" style={styles.label}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={useremail}
          onChange={(e) => setUseremail(e.target.value)}
          style={styles.input}
        />

        <label htmlFor="password" style={styles.label}>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;
