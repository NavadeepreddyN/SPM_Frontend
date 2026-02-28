import { useAuth } from "../../context/AuthContext";

const TeacherProfile = () => {
  const { user } = useAuth();

  return (
    <div style={{
      display: "flex",
      gap: "40px",
      alignItems: "center"
    }}>
      <div style={{
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        background: "#3b82f6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "40px",
        color: "white",
        fontWeight: "bold"
      }}>
        {user?.data?.name?.charAt(0)}
      </div>

      <div>
        <h2 style={{ marginBottom: "15px" }}>Profile Information</h2>
        <p><strong>Name:</strong> {user?.data?.name}</p>
        <p><strong>Subject:</strong> {user?.data?.subject}</p>
        <p><strong>Faculty ID:</strong> {user?.data?.facultyId}</p>
      </div>
    </div>
  );
};

export default TeacherProfile;