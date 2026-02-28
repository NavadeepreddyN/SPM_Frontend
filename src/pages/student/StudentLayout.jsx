import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../styles/studentDashboard.css";

const StudentLayout = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="student-wrapper">

      {/* Sidebar */}
      <aside className="student-sidebar">
        <h2 className="student-logo">Student Panel</h2>

        <nav className="student-nav">
          <NavLink to="/student/dashboard" className="student-link">
            Dashboard
          </NavLink>

          <NavLink to="/student/calendar" className="student-link">
            Calendar
          </NavLink>

          <NavLink to="/student/submissions" className="student-link">
            Submissions
          </NavLink>

          <NavLink to="/student/grades" className="student-link">
            Grades
          </NavLink>

          <NavLink to="/student/notifications" className="student-link">
            Notifications
          </NavLink>
        </nav>

        <button className="student-logout" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="student-main">
        <div className="student-header">
          <h1>Welcome, {user?.data?.name}</h1>
        </div>

        <div className="student-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default StudentLayout;