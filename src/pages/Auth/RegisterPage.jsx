import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import '../../styles/auth.css';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      await authService.signup(form);
      setSuccess('Account created! You can now log in.');
      navigate('/auth/login');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2>Register</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="username" value={form.username} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={form.password} onChange={handleChange} required />
          </Form.Group>
          <Button type="submit" variant="primary">Register</Button>
          <Button id='switch' variant="link" onClick={() => navigate('/login')}>Login</Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
