import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import noteService from '../../services/noteService';
import '../../styles/notes.css';
import TagBadge from '../../components/tags/TagBadge';

const NoteDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNote();
  }, [id]);

  const loadNote = async () => {
    try {
      const res = await noteService.getNote(id);
      setNote(res.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load note.');
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      try {
        await noteService.deleteNote(id);
        navigate('/notes');
      } catch (err) {
        setError('Failed to delete note.');
      }
    }
  };

  if (loading) {
    return (
      <div className="notes-container">
        <div className="notes-content">
          <div className="alert">Loading...</div>
        </div>
      </div>
    );
  }

  if (!note) {
    return (
      <div className="notes-container">
        <div className="notes-content">
          <div className="alert alert-danger">Note not found.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="notes-container">
      <div className="notes-content">
        <div className="notes-header">
          <h2>{note.title}</h2>
          <div className="note-actions">
            <Button variant="primary" onClick={() => navigate(`/notes/${id}/edit`)}>Edit</Button>
            <Button variant="secondary" onClick={() => navigate('/notes')}>Back</Button>
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
          </div>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="note-card">
          <p>{note.content}</p>
        </div>
        {note.tags && note.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {note.tags.map(tag => (
              <TagBadge key={tag.id} name={tag.name} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteDetail;
