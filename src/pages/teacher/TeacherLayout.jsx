import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../styles/teacherDashboard.css";

const TeacherLayout = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="dashboard-wrapper">
      
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Teacher Panel</h2>

        <nav>
          <NavLink to="/teacher/dashboard" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/teacher/courses" className="nav-link">
            My Courses
          </NavLink>

          <NavLink to="/teacher/submissions" className="nav-link">
            Student Submissions
          </NavLink>

          <NavLink to="/teacher/evaluation" className="nav-link">
            Project Evaluation
          </NavLink>

          <NavLink to="/teacher/profile" className="nav-link">
            Profile
          </NavLink>
        </nav>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="top-bar">
          <h1>Welcome, {user?.data?.name}</h1>
          <span className="subject-badge">{user?.data?.subject}</span>
        </div>

        <div className="content-area">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default TeacherLayout;