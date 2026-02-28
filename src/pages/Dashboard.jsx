import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  if (user.role === "admin") {
    return <Navigate to="/teacher/dashboard" />;
  }

  if (user.role === "student") {
    return <Navigate to="/student/dashboard" />;
  }

  return <Navigate to="/" />;
};

export default Dashboard;