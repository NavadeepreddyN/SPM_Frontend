import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css";

const TeacherRegister = () => {
  const { registerTeacher } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    facultyId: "",
    subject: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*\-_])[A-Za-z\d!@#$%^&*\-_]{8,}$/;

  const phoneRegex = /^\d{10}$/;
  const facultyIdRegex = /^\d{4}$/;

  const handleSubmit = () => {
    if (
      !form.name ||
      !form.facultyId ||
      !form.phone ||
      !form.password ||
      !form.confirmPassword
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (!facultyIdRegex.test(form.facultyId)) {
      alert("Faculty ID must contain exactly 4 digits");
      return;
    }

    if (!phoneRegex.test(form.phone)) {
      alert("Phone number must contain exactly 10 digits");
      return;
    }

    if (!passwordRegex.test(form.password)) {
      alert(
        "Password must contain:\n• 1 Capital letter\n• 1 Small letter\n• 1 Number\n• 1 Special Symbol (!@#$%^&*-_)\n• Minimum 8 characters"
      );
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    registerTeacher(form);
    alert("Teacher Registered Successfully!");
    navigate("/teacher-login");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Teacher Registration</h2>

        <input
          placeholder="Full Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Faculty ID"
          onChange={(e) =>
            setForm({ ...form, facultyId: e.target.value })
          }
        />

        <select
          onChange={(e) =>
            setForm({ ...form, subject: e.target.value })
          }
        >
          <option value="">Select Subject</option>
          <option value="FSAD">FSAD</option>
          <option value="FEDF">FEDF</option>
          <option value="DTI">DTI</option>
          <option value="DTW">DTW</option>
        </select>

        <input
          placeholder="Phone Number"
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Create Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) =>
            setForm({ ...form, confirmPassword: e.target.value })
          }
        />

        <button onClick={handleSubmit}>Register</button>

        <div className="switch-link">
          Already registered?{" "}
          <Link to="/teacher-login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default TeacherRegister;