import "./studentCalendar.css";

const StudentCalendar = () => {
  return (
    <div className="student-calendar">

      <div className="calendar-header">
        <div>
          <h1>Project Calendar</h1>
          <p>Track your project deadlines and events</p>
        </div>
      </div>

      {/* Calendar Layout */}
      <div className="calendar-container">

        <div className="calendar-card">
          <div className="calendar-top">
            <h3>Upcoming Deadlines</h3>
          </div>

          <div className="calendar-placeholder">
            No upcoming deadlines.
          </div>
        </div>

        <div className="calendar-card">
          <div className="calendar-top">
            <h3>Project Milestones</h3>
          </div>

          <div className="calendar-placeholder">
            No milestones scheduled.
          </div>
        </div>

      </div>

      {/* Full Calendar Box */}
      <div className="full-calendar-section">
        <h2>Monthly View</h2>

        <div className="calendar-grid">
          <div className="empty-calendar">
            Calendar will appear here.
          </div>
        </div>
      </div>

    </div>
  );
};

export default StudentCalendar;