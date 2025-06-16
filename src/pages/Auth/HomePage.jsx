import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/auth.css';

const HomePage = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="brand-section">
          <h1 className="brand-title">NoteApp</h1>
          <p className="brand-description">
            Your personal space for organizing thoughts, ideas, and memories.
            Keep everything in one place, accessible anywhere.
          </p>
        </div>
        <div className="auth-section">
          <div className="auth-tabs">
            <Link 
              to="/login" 
              className={`auth-tab ${!isLoginPage ? 'active' : ''}`}
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className={`auth-tab ${!isLoginPage ? 'active' : ''}`}
            >
              Register
            </Link>
          </div>
          <div className="auth-form-container">
            {isLoginPage ? (
              <div className="auth-form">
                <h2>Welcome Back</h2>
                <p className="auth-subtitle">Sign in to continue to your notes</p>
                <Link to="/login" className="btn btn-primary w-100">Login</Link>
              </div>
            ) : (
              <div className="auth-form">
                <h2>Get Started</h2>
                <p className="auth-subtitle">Create your account to start organizing</p>
                <Link to="/register" className="btn btn-primary w-100">Register</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 