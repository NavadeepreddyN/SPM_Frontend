import "../../styles/teacherDashboard.css";

const Grades = () => {
  return (
    <div className="page-card">
      <h2>Grades Management</h2>

      <table className="modern-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Project</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rohith</td>
            <td>AI Project</td>
            <td>85</td>
          </tr>
          <tr>
            <td>Anil</td>
            <td>Web Portal</td>
            <td>90</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Grades;