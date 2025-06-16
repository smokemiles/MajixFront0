import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/common.css';

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">NoteApp</div>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <Link 
            to="/notes" 
            className={`sidebar-link ${location.pathname === '/notes' ? 'active' : ''}`}
          >
            <span className="sidebar-icon">📝</span>
            All Notes
          </Link>
        </li>
        <li className="sidebar-item">
          <Link 
            to="/tags" 
            className={`sidebar-link ${location.pathname === '/tags' ? 'active' : ''}`}
          >
            <span className="sidebar-icon">🏷️</span>
            Tags
          </Link>
        </li>
        <li className="sidebar-item">
          <Link 
            to="/profile" 
            className={`sidebar-link ${location.pathname === '/profile' ? 'active' : ''}`}
          >
            <span className="sidebar-icon">👤</span>
            Profile
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
