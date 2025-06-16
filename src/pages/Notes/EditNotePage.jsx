import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import noteService from '../../services/noteService';
import '../../styles/notes.css';

const EditNote = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState({ title: '', content: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNote();
  }, [id]);

  const loadNote = async () => {
    try {
      const res = await noteService.getNote(id);
      setForm({ title: res.data.title, content: res.data.content });
      setLoading(false);
    } catch (err) {
      setError('Failed to load note.');
      setLoading(false);
    }
  };

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      await noteService.updateNote(id, form);
      navigate('/notes');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update note.');
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

  return (
    <div className="notes-container">
      <div className="notes-content">
        <div className="notes-header">
          <h2>Edit Note</h2>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="note-form">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                name="content"
                value={form.content}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <div className="note-actions">
              <Button type="submit" variant="primary">Update Note</Button>
              <Button variant="secondary" onClick={() => navigate('/notes')}>Cancel</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditNote;
