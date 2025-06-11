import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { Button } from 'react-bootstrap';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">NoteApp</Link>
      <div className="collapse navbar-collapse">
        {currentUser && (
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/notes">Notes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tags">Tags</Link>
            </li>
          </ul>
        )}
        <ul className="navbar-nav ms-auto">
          {currentUser ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">{currentUser.username || 'Profile'}</Link>
              </li>
              <li className="nav-item">
                <Button onClick={handleLogout} variant="outline-light" size="sm" className="mt-1">Logout</Button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
