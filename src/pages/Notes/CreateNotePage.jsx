import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import noteService from '../../services/noteService';
import '../../styles/notes.css';

const CreateNote = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', content: '' });
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      await noteService.createNote(form);
      navigate('/notes');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create note.');
    }
  };

  return (
    <div className="notes-container">
      <div className="notes-content">
        <div className="notes-header">
          <h2>Create New Note</h2>
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
              <Button type="submit" variant="primary">Create Note</Button>
              <Button variant="secondary" onClick={() => navigate('/notes')}>Cancel</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
