import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Register = ({ type }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    id: '',
    email: '',
    sectionId: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (type === 'student' && formData.id.length !== 10) {
      setError('Student University ID must be exactly 10 digits.');
      return;
    }
    if (type === 'teacher' && formData.id.length !== 4) {
      setError('Teacher University ID must be exactly 4 digits.');
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setError('Password must be at least 8 chars long with uppercase, lowercase, number, and special character.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      await axios.post('http://localhost:8080/api/auth/register', {
        fullName: formData.fullName,
        id: formData.id,
        email: formData.email,
        sectionId: formData.sectionId,
        password: formData.password,
        role: type.toUpperCase()
      });
      
      setSuccess('Registration successful! Redirecting to login...');
      setTimeout(() => {
        navigate(`/login/${type}`);
      }, 2000);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>{type === 'student' ? 'Student' : 'Teacher'} Register</h2>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>University ID ({type === 'student' ? '10' : '4'} digits)</label>
            <input type="number" name="id" value={formData.id} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>University Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Section ID</label>
            <input type="text" name="sectionId" value={formData.sectionId} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>New Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'Processing...' : 'Register'}
          </button>
        </form>
        
        <div className="portal-switch">
          <p>Already have an account? <Link to={`/login/${type}`}>Login here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
