import "./studentDashboard.css";

const StudentDashboardHome = () => {
  return (
    <div className="student-dashboard">

      <div className="dashboard-header">
        <div>
          <h1>Student Dashboard</h1>
          <p>Overview of your academic progress</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">

        <div className="stat-card">
          <h3>Active Projects</h3>
          <div className="stat-placeholder">
            No active projects
          </div>
        </div>

        <div className="stat-card">
          <h3>Pending Submissions</h3>
          <div className="stat-placeholder">
            No pending submissions
          </div>
        </div>

        <div className="stat-card">
          <h3>Grades</h3>
          <div className="stat-placeholder">
            No grades available
          </div>
        </div>

        <div className="stat-card">
          <h3>Notifications</h3>
          <div className="stat-placeholder">
            No new notifications
          </div>
        </div>

      </div>

      {/* Recent Activity Section */}
      <div className="activity-section">
        <h2>Recent Activity</h2>

        <div className="activity-box">
          No recent activity available.
        </div>
      </div>

    </div>
  );
};

export default StudentDashboardHome;