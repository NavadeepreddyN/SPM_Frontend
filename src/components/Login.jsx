import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = ({ type }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (type === 'student' && id.length !== 10) {
      setError('Student University ID must be exactly 10 digits.');
      return;
    }
    if (type === 'teacher' && id.length !== 4) {
      setError('Teacher University ID must be exactly 4 digits.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        id,
        password,
        role: type.toUpperCase()
      });
      
      // Store user data on successful login
      localStorage.setItem('user', JSON.stringify(response.data));
      
      if (type === 'student') navigate('/student/dashboard');
      else navigate('/teacher/dashboard');
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError('Server error. Ensure the Java backend is running.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>{type === 'student' ? 'Student' : 'Teacher'} Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>University ID ({type === 'student' ? '10' : '4'} digits)</label>
            <input 
              type="number" 
              value={id} 
              onChange={(e) => setId(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="portal-switch">
          <p>Don't have an account? <Link to={`/register/${type}`}>Register here</Link></p>
          <p style={{ marginTop: '0.5rem' }}>
            Go to <Link to={type === 'student' ? '/login/teacher' : '/login/student'}>
              {type === 'student' ? 'Teacher' : 'Student'} Portal
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
