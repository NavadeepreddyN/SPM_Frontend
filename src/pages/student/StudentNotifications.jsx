import "./studentNotifications.css";

const StudentNotifications = () => {
  return (
    <div className="notifications-page">

      {/* Header */}
      <div className="page-header">
        <div>
          <h1>Notifications</h1>
          <p>Stay updated with important announcements</p>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="notifications-section">

        <div className="notification-card">
          <div className="notification-placeholder">
            No notifications available.
          </div>
        </div>

      </div>

    </div>
  );
};

export default StudentNotifications;