import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-card">
        <h1>Student Project Management</h1>
        <p>Select your role to continue</p>

        <div className="button-group">
          <button
            className="student-btn"
            onClick={() => navigate("/student-login")}
          >
            Login as Student
          </button>

          <button
            className="teacher-btn"
            onClick={() => navigate("/teacher-login")}
          >
            Login as Teacher
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;