import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Loader from "../components/Loader";
import "../styles/login.css";

const TeacherLogin = () => {
  const { loginTeacher } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    facultyId: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const success = loginTeacher(
        form.facultyId,
        form.password
      );

      setLoading(false);

      if (success) {
        navigate("/dashboard");
      } else {
        alert("Invalid Credentials");
      }
    }, 1500);
  };

  if (loading) return <Loader />;

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Teacher Login</h2>

        <form onSubmit={handleLogin}>
          <input
            placeholder="Faculty ID"
            value={form.facultyId}
            onChange={(e) =>
              setForm({ ...form, facultyId: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button type="submit">Login</button>
        </form>

        <div className="switch-link">
          Not registered?{" "}
          <Link to="/teacher-register">
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeacherLogin;