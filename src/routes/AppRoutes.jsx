import { Routes, Route } from "react-router-dom";

/* Public Pages */
import Home from "../pages/Home";
import StudentLogin from "../pages/StudentLogin";
import StudentRegister from "../pages/StudentRegister";
import TeacherLogin from "../pages/TeacherLogin";
import TeacherRegister from "../pages/TeacherRegister";

/* Dashboard Redirect */
import Dashboard from "../pages/Dashboard";

/* ===== TEACHER PAGES ===== */
import TeacherLayout from "../pages/teacher/TeacherLayout";
import TeacherHome from "../pages/teacher/TeacherHome";
import MyCourses from "../pages/teacher/MyCourses";
import TeacherSubmissions from "../pages/teacher/TeacherSubmissions";
import ProjectEvaluation from "../pages/teacher/ProjectEvaluation";
import TeacherProfile from "../pages/teacher/TeacherProfile";

/* ===== STUDENT PAGES ===== */
import StudentLayout from "../pages/student/StudentLayout";
import StudentDashboardHome from "../pages/student/StudentDashboardHome";
import StudentCalendar from "../pages/student/StudentCalendar";
import StudentSubmissions from "../pages/student/StudentSubmissions";
import StudentGrades from "../pages/student/StudentGrades";
import StudentNotifications from "../pages/student/StudentNotifications";

const AppRoutes = () => {
  return (
    <Routes>

      {/* PUBLIC ROUTES */}
      <Route path="/" element={<Home />} />
      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/student-register" element={<StudentRegister />} />
      <Route path="/teacher-login" element={<TeacherLogin />} />
      <Route path="/teacher-register" element={<TeacherRegister />} />

      {/* DASHBOARD REDIRECT */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* TEACHER ROUTES */}
      <Route path="/teacher" element={<TeacherLayout />}>
        <Route index element={<TeacherHome />} />
        <Route path="dashboard" element={<TeacherHome />} />
        <Route path="courses" element={<MyCourses />} />
        <Route path="submissions" element={<TeacherSubmissions />} />
        <Route path="evaluation" element={<ProjectEvaluation />} />
        <Route path="profile" element={<TeacherProfile />} />
      </Route>

      {/* STUDENT ROUTES */}
      <Route path="/student" element={<StudentLayout />}>
        <Route index element={<StudentDashboardHome />} />
        <Route path="dashboard" element={<StudentDashboardHome />} />
        <Route path="calendar" element={<StudentCalendar />} />
        <Route path="submissions" element={<StudentSubmissions />} />
        <Route path="grades" element={<StudentGrades />} />
        <Route path="notifications" element={<StudentNotifications />} />
      </Route>

    </Routes>
  );
};

export default AppRoutes;