import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Auth Pages
import HomePage from "./pages/Auth/HomePage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordPage";

// Notes Pages
import AllNotesPage from "./pages/Notes/AllNotesPage";
import NoteDetailPage from "./pages/Notes/NoteDetailPage";

// Tags Pages
import AllTagsPage from "./pages/Tags/AllTagsPage";

// Users Pages
import ProfilePage from "./pages/Users/ProfilePage";

// Common Components
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Sidebar from "./components/common/Sidebar";
import ProtectedRoute from "./components/common/ProtectedRoute";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Protected Routes */}
        <Route
          element={
            <>
              <Navbar />
              <div className="flex">
                <Sidebar />
                <main className="flex-1 p-4">
                  <ProtectedRoute />
                </main>
              </div>
              <Footer />
            </>
          }
        >
          {/* Notes Routes */}
          <Route path="/notes" element={<AllNotesPage />} />
          <Route path="/notes/:id" element={<NoteDetailPage />} />

          {/* Tags Routes */}
          <Route path="/tags" element={<AllTagsPage />} />

          {/* Profile Routes */}
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
