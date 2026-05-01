import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/login/student" />} />
          
          {/* Auth Routes */}
          <Route path="/login/student" element={<Login type="student" />} />
          <Route path="/login/teacher" element={<Login type="teacher" />} />
          <Route path="/register/student" element={<Register type="student" />} />
          <Route path="/register/teacher" element={<Register type="teacher" />} />

          {/* Dashboard Routes */}
          <Route path="/student/dashboard/*" element={<StudentDashboard />} />
          <Route path="/teacher/dashboard/*" element={<TeacherDashboard />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
