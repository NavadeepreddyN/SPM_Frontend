import { useAuth } from "../context/AuthContext";
import { projects } from "../data/dummyData";
import "../styles/teacherDashboard.css";

const AdminDashboard = () => {
  const { user, logout } = useAuth();

  const totalProjects = projects.length;
  const completedProjects = projects.filter(
    (p) => p.progress === 100
  ).length;
  const pendingProjects = totalProjects - completedProjects;

  return (
    <div className="dashboard-container">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>Teacher Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Manage Projects</li>
          <li>Review Submissions</li>
          <li>Profile</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">

        {/* Navbar */}
        <div className="top-navbar">
  <h1>
    Welcome to {user?.data?.subject}, {user?.data?.name}
  </h1>

  <button className="logout-btn" onClick={logout}>
    Logout
  </button>
</div>

        {/* Welcome Section */}
        <div className="welcome-card">
          <h2>Faculty Dashboard</h2>
          <p>Monitor and manage student projects efficiently.</p>
        </div>

        {/* Stats Section */}
        <div className="stats-grid">
          <div className="stat-card">
            <h4>Total Projects</h4>
            <h3>{totalProjects}</h3>
          </div>

          <div className="stat-card">
            <h4>Completed</h4>
            <h3>{completedProjects}</h3>
          </div>

          <div className="stat-card">
            <h4>Pending</h4>
            <h3>{pendingProjects}</h3>
          </div>
        </div>

        {/* Create Project Button */}
        <button className="create-btn">+ Create New Project</button>

        {/* Project Grid */}
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Progress:</strong> {project.progress}%</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;