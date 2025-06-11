import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 fixed bottom-0 w-full z-10">
      <small>&copy; {new Date().getFullYear()} NoteApp. All rights reserved.</small>
    </footer>
  );
};

export default Footer;
