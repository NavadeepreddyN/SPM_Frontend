import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  /* ================= LOAD FROM LOCALSTORAGE ================= */

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : [];
  });

  const [teachers, setTeachers] = useState(() => {
    const saved = localStorage.getItem("teachers");
    return saved ? JSON.parse(saved) : [];
  });

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("projects");
    return saved ? JSON.parse(saved) : [];
  });

  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem("notifications");
    return saved ? JSON.parse(saved) : [];
  });

  /* ================= SAVE TO LOCALSTORAGE ================= */

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem("teachers", JSON.stringify(teachers));
  }, [teachers]);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  /* ================= REGISTER ================= */

  const registerTeacher = (data) => {
    setTeachers((prev) => [...prev, data]);
  };

  const registerStudent = (data) => {
    setStudents((prev) => [...prev, data]);
  };

  /* ================= LOGIN ================= */

  const loginTeacher = (facultyId, password) => {
    const found = teachers.find(
      (t) => t.facultyId === facultyId && t.password === password
    );

    if (found) {
      setUser({ role: "admin", data: found });
      return true;
    }
    return false;
  };

  const loginStudent = (universityId, password) => {
    const found = students.find(
      (s) => s.universityId === universityId && s.password === password
    );

    if (found) {
      setUser({ role: "student", data: found });
      return true;
    }
    return false;
  };

  /* ================= ASSIGN PROJECT ================= */

  const assignProject = (project) => {
    const updatedProjects = [...projects, project];
    setProjects(updatedProjects);

    const newNotification = {
      id: Date.now(),
      facultyId: project.facultyId,
      sec: project.sec,
      message: `New Project Assigned: ${project.name}`,
      time: new Date().toLocaleString(),
    };

    setNotifications((prev) => [newNotification, ...prev]);
  };

  /* ================= LOGOUT ================= */

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        students,
        teachers,
        projects,
        notifications,
        registerTeacher,
        registerStudent,
        loginTeacher,
        loginStudent,
        assignProject,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);