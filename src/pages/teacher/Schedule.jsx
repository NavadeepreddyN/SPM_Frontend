import "../../styles/teacherDashboard.css";

const Schedule = () => {
  return (
    <div className="page-card">
      <h2>Class Schedule</h2>

      <div className="schedule-card">
        <h4>FSAD - Section A</h4>
        <p>Time: 10:00 AM - 12:00 PM</p>
      </div>

      <div className="schedule-card">
        <h4>FEDF - Section B</h4>
        <p>Time: 2:00 PM - 4:00 PM</p>
      </div>
    </div>
  );
};

export default Schedule;