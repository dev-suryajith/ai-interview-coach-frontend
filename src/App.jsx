import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import GenerateInterview from "./pages/GenerateInterview";
import InterviewSession from "./pages/InterviewSession";
import Result from "./pages/Result";
import History from "./pages/History";

import ProtectedRoute from "./components/ProtectedRoute";
import Page404 from "./pages/Page404";
import ResumeUpload from "./pages/ResumeUpload.jsx";
import Landing from "./pages/Landing.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
        <Route path="/generate" element={<ProtectedRoute> <GenerateInterview /> </ProtectedRoute>} />
        <Route path="/interview/:id" element={<ProtectedRoute> <InterviewSession /> </ProtectedRoute>} />
        <Route path="/result/:id" element={<ProtectedRoute> <Result /> </ProtectedRoute>} />
        <Route path="/history" element={<ProtectedRoute> <History /> </ProtectedRoute>} />
        <Route path="/upload-resume" element={<ProtectedRoute> <ResumeUpload /> </ProtectedRoute>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;