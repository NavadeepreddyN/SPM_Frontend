import { useAuth } from "../../context/AuthContext";

const DashboardHome = () => {
  const { user, projects } = useAuth();

  // Safety check (prevents blank crash)
  if (!user) {
    return <h2>Loading...</h2>;
  }

  const teacherProjects = projects.filter(
    (p) => p.facultyId === user.data.facultyId
  );

  return (
    <div>
      <h2>Teacher Dashboard</h2>

      <p><strong>Name:</strong> {user.data.name}</p>
      <p><strong>Subject:</strong> {user.data.subject}</p>

      <hr />

      <h3>Total Projects Assigned: {teacherProjects.length}</h3>

      {teacherProjects.length === 0 ? (
        <p>No projects assigned yet.</p>
      ) : (
        teacherProjects.map((project, index) => (
          <div key={index} style={{
            background: "#f3f4f6",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px"
          }}>
            <h4>{project.name}</h4>
            <p>{project.details}</p>
            <p>
              <strong>Section:</strong> {project.sec}
            </p>
            <p>
              <strong>Schedule:</strong> {project.startDate} → {project.endDate}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default DashboardHome;