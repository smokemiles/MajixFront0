import React from 'react';
import '../../styles/common.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <small>&copy; {new Date().getFullYear()} NoteApp. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
