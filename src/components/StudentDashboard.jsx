import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  // Default Empty Data (No Dummy Data)
  const [projects, setProjects] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login/student');
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login/student');
  };

  const navLinks = [
    { path: '', label: 'Home' },
    { path: 'projects', label: 'My Projects' },
    { path: 'submissions', label: 'Submissions' },
    { path: 'grades', label: 'Grades' },
    { path: 'notifications', label: 'Notifications' },
    { path: 'profile', label: 'Profile' }
  ];

  if (!user) return <div style={{ padding: '2rem' }}>Loading...</div>;

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h3>Student Portal</h3>
        <div style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Welcome, <strong>{user.fullName || 'Student'}</strong><br/>
          Section: {user.sectionId}
        </div>
        <nav>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={`/student/dashboard/${link.path}`} 
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
                  <h4>Active Projects</h4>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                    {projects.length}
                  </p>
                </div>
                <div className="card">
                  <h4>Pending Notifications</h4>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--secondary)' }}>
                    {notifications.length}
                  </p>
                </div>
              </div>
            </div>
          } />
          
          <Route path="projects" element={
            <div>
              <h2>My Projects</h2>
              {projects.length === 0 ? (
                <div className="empty-state">
                  <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>No Projects Assigned</h3>
                  <p>Your teacher has not assigned any projects to your section yet.</p>
                </div>
              ) : (
                <div className="grid">
                  {projects.map(proj => (
                    <div key={proj.id} className="card">
                      <h4>{proj.name}</h4>
                      <p>{proj.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          } />

          <Route path="submissions" element={
            <div className="card">
               <h2>Submit Assignment</h2>
               {projects.length === 0 ? (
                  <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>You must have an assigned project to submit work.</p>
               ) : (
                 <form style={{ marginTop: '1.5rem' }}>
                   <div className="form-group">
                     <label>Select Project</label>
                     <select required>
                       <option value="">-- Select --</option>
                       {projects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                     </select>
                   </div>
                   <div className="form-group">
                     <label>Submission Link (GitHub/Drive)</label>
                     <input type="url" required />
                   </div>
                   <button type="submit" className="btn">Submit Work</button>
                 </form>
               )}
            </div>
          } />

           <Route path="grades" element={
             <div className="empty-state">
               <h3>No Grades Yet</h3>
               <p>Your evaluations will appear here once graded.</p>
             </div>
           } />
           <Route path="notifications" element={
             <div className="empty-state">
               <h3>All Caught Up!</h3>
               <p>You have zero unread notifications.</p>
             </div>
           } />
           <Route path="profile" element={
             <div className="card">
               <h2>My Profile</h2>
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

export default StudentDashboard;
