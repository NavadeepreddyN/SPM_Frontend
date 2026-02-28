import { useAuth } from "../context/AuthContext";
import "../styles/navbar.css";

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <div className="navbar">
      <h2>Student Project Management</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Navbar;