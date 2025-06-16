import React, { useState, useContext } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import '../../styles/auth.css';

const Login = () => {
  const { setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await authService.login(form.email, form.password);
      setCurrentUser(res.data.user);
      navigate('/notes');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2>Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={form.password} onChange={handleChange} required />
          </Form.Group>
          <Button type="submit" variant="primary">Login</Button>
          <Button id='switch' variant="link" onClick={() => navigate('/register')}>Register</Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
