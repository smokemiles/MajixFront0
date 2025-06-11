import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Auth Pages
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
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <Routes>
            {/* Auth Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />

            {/* Notes Routes */}
            <Route path="/" element={<Navigate to="/notes" replace />} />
            <Route
              path="/notes"
              element={
                <ProtectedRoute>
                  <AllNotesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/notes/:id"
              element={
                <ProtectedRoute>
                  <NoteDetailPage />
                </ProtectedRoute>
              }
            />

            {/* Tags Routes */}
            <Route
              path="/tags"
              element={
                <ProtectedRoute>
                  <AllTagsPage />
                </ProtectedRoute>
              }
            />

            {/* Profile Routes */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />

            {/* 404 Route */}
            <Route path="*" element={<Navigate to="/notes" replace />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AppRoutes;
