import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import noteService from '../../services/noteService';
import '../../styles/notes.css';

const AllNotes = () => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const res = await noteService.getAllNotes();
      setNotes(res.data);
    } catch (err) {
      setError('Failed to load notes.');
    }
  };

  return (
    <div className="notes-container">
      <div className="notes-content">
        <div className="notes-header">
          <h2>My Notes</h2>
          <Link to="/notes/create">
            <Button variant="primary">Create New Note</Button>
          </Link>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="notes-grid">
          {notes.map(note => (
            <div key={note._id} className="note-card">
              <h3>{note.title}</h3>
              <p>{note.content.substring(0, 150)}...</p>
              <div className="note-actions">
                <Link to={`/notes/${note._id}`}>
                  <Button variant="secondary">View</Button>
                </Link>
                <Link to={`/notes/${note._id}/edit`}>
                  <Button variant="primary">Edit</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllNotes;
