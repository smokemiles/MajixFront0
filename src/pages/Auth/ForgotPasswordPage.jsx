import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import authService from '../../services/authService';
import '../../styles/auth.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      await authService.resetPassword(email);
      setMessage('Password reset email sent.');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to send reset email.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2>Reset Password</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </Form.Group>
          <Button type="submit" variant="primary">Send Reset Link</Button>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
