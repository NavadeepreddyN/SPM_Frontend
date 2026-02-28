import "./studentGrades.css";

const StudentGrades = () => {
  return (
    <div className="grades-page">

      {/* Header */}
      <div className="page-header">
        <div>
          <h1>Grades</h1>
          <p>View your academic performance</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grades-summary">

        <div className="summary-card">
          <h4>Overall Performance</h4>
          <div className="summary-placeholder">
            No grade data available
          </div>
        </div>

        <div className="summary-card">
          <h4>Latest Evaluation</h4>
          <div className="summary-placeholder">
            No recent evaluations
          </div>
        </div>

      </div>

      {/* Detailed Grades */}
      <div className="grades-details">
        <h2>Grade Breakdown</h2>

        <div className="details-card">
          <div className="details-placeholder">
            Detailed grades will appear here.
          </div>
        </div>
      </div>

    </div>
  );
};

export default StudentGrades;