import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css";

const StudentRegister = () => {
  const { registerStudent } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    universityId: "",
    year: "",
    gender: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*\-_])[A-Za-z\d!@#$%^&*\-_]{8,}$/;

  const phoneRegex = /^\d{10}$/;
  const universityIdRegex = /^\d{10}$/;

  const handleSubmit = () => {
    if (
      !form.name ||
      !form.universityId ||
      !form.phone ||
      !form.password ||
      !form.confirmPassword
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (!universityIdRegex.test(form.universityId)) {
      alert("University ID must contain exactly 10 digits");
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

    registerStudent(form);
    alert("Student Registered Successfully!");
    navigate("/student-login");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Student Registration</h2>

        <input
          placeholder="Full Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="University ID"
          onChange={(e) =>
            setForm({ ...form, universityId: e.target.value })
          }
        />

        <input
          placeholder="Year"
          onChange={(e) =>
            setForm({ ...form, year: e.target.value })
          }
        />

        <input
          placeholder="Phone Number"
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <div className="gender-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={(e) =>
                setForm({ ...form, gender: e.target.value })
              }
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={(e) =>
                setForm({ ...form, gender: e.target.value })
              }
            />
            Female
          </label>
        </div>
        <input
                placeholder="Faculty ID"
                 onChange={(e) =>
                 setForm({ ...form, facultyId: e.target.value })
                 }
        />

        <input
          placeholder="Section"
          onChange={(e) =>
            setForm({ ...form, section: e.target.value })
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
          <Link to="/student-login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default StudentRegister;