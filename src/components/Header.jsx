import { NavLink } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        
        {/* Logo Section */}
        <div className="logo">
          <div className="logo-icon">SPM</div>
          <span className="logo-text">Student Project Management</span>
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/teacher-login">
            Teacher
          </NavLink>
          <NavLink to="/student-login">
            Student
          </NavLink>
        </nav>

      </div>
    </header>
  );
};

export default Header;