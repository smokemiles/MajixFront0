import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-white shadow-md w-64 h-full p-4 hidden md:block">
      <nav className="flex flex-col gap-4">
        <Link to="/notes" className="text-blue-600 hover:underline">All Notes</Link>
        <Link to="/tags" className="text-blue-600 hover:underline">Tags</Link>
        <Link to="/profile" className="text-blue-600 hover:underline">Profile</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
