import { useAuth } from "../../context/AuthContext";

const StudentDashboardHome = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-container">

      {/* Welcome Section */}
      <div className="welcome-card">
        <h1>Welcome back, {user?.data?.name}</h1>
        <p>Track your academic progress and manage your projects efficiently.</p>
      </div>

      {/* Stats Section */}
      <div className="stats-grid">

        <div className="stat-card">
          <h3>Active Projects</h3>
          <span className="stat-number green">0</span>
        </div>

        <div className="stat-card">
          <h3>Expired Projects</h3>
          <span className="stat-number red">0</span>
        </div>

        <div className="stat-card">
          <h3>Total Submissions</h3>
          <span className="stat-number blue">0</span>
        </div>

        <div className="stat-card">
          <h3>Average Grade</h3>
          <span className="stat-number purple">--</span>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <div className="action-card">📅 View Calendar</div>
          <div className="action-card">📤 Submit Project</div>
          <div className="action-card">📊 View Grades</div>
          <div className="action-card">🔔 Check Notifications</div>
        </div>
      </div>

    </div>
  );
};

export default StudentDashboardHome;