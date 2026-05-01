import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  // Default Empty Data
  const [students, setStudents] = useState([]);
  const [evaluations, setEvaluations] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login/teacher');
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login/teacher');
  };

  const navLinks = [
    { path: '', label: 'Home' },
    { path: 'students', label: 'My Students' },
    { path: 'assign', label: 'Assign Project' },
    { path: 'submissions', label: 'Student Submissions' },
    { path: 'evaluation', label: 'Project Evaluation' },
    { path: 'profile', label: 'Profile' }
  ];

  if (!user) return <div style={{ padding: '2rem' }}>Loading...</div>;

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h3>Teacher Portal</h3>
        <div style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Prof. <strong>{user.fullName || 'Teacher'}</strong><br/>
          Section: {user.sectionId}
        </div>
        <nav>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={`/teacher/dashboard/${link.path}`} 
              className={`nav-item ${location.pathname.endsWith(link.path) && link.path !== '' ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <button onClick={handleLogout} className="btn" style={{ marginTop: 'auto', background: '#DC2626' }}>
            Logout
          </button>
        </nav>
      </aside>
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <div>
              <h2>Dashboard Overview</h2>
              <div className="grid" style={{ marginTop: '2rem' }}>
                <div className="card">
                  <h4>Total Students in Section</h4>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                    {students.length}
                  </p>
                </div>
                <div className="card">
                  <h4>Pending Evaluations</h4>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--secondary)' }}>
                    {evaluations.length}
                  </p>
                </div>
              </div>
            </div>
          } />
          
          <Route path="students" element={
            <div>
              <h2>My Students</h2>
              {students.length === 0 ? (
                <div className="empty-state" style={{ marginTop: '2rem' }}>
                  <h3>No Students Found</h3>
                  <p>Students registering with your Section ID ({user.sectionId}) will appear here automatically.</p>
                </div>
              ) : (
                <div className="card">
                  {/* Table logic would go here */}
                </div>
              )}
            </div>
          } />

          <Route path="assign" element={
            <div className="card">
              <h2>Assign New Project</h2>
              <form style={{ marginTop: '1.5rem' }}>
                <div className="form-group">
                  <label>Project Name</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea rows="4" required />
                </div>
                <div className="form-group">
                  <label>Deadline</label>
                  <input type="date" required />
                </div>
                <button className="btn" type="submit">Publish to Section</button>
              </form>
            </div>
          } />

          <Route path="submissions" element={
            <div className="empty-state">
              <h3>No Submissions Yet</h3>
              <p>When students submit their links, they will be listed here.</p>
            </div>
          } />
          <Route path="evaluation" element={
            <div className="empty-state">
              <h3>Empty Evaluation Queue</h3>
              <p>You have evaluated all submitted projects.</p>
            </div>
          } />
          <Route path="profile" element={
            <div className="card">
               <h2>Teacher Profile</h2>
               <div style={{ marginTop: '1.5rem' }}>
                 <p><strong>Name:</strong> {user.fullName}</p>
                 <p><strong>Role:</strong> {user.role}</p>
                 <p><strong>Section:</strong> {user.sectionId}</p>
               </div>
             </div>
          } />
        </Routes>
      </main>
    </div>
  );
};

export default TeacherDashboard;
