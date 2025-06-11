import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import userService from '../../services/userService';
import { Form, Button, Alert } from 'react-bootstrap';

const ProfilePage = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: '',
    gender: '',
    status: '',
    profilepic: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (currentUser) {
      setFormData({
        username: currentUser.username || '',
        gender: currentUser.gender || '',
        status: currentUser.status || '',
        profilepic: currentUser.profilepic || '',
      });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const res = await userService.updateProfile(formData);
      setMessage('Profile updated successfully.');
      setCurrentUser(res.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update profile.');
    }
  };

  return (
    <div className="container mt-5 max-w-xl">
      <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>

      {error && <Alert variant="danger">{error}</Alert>}
      {message && <Alert variant="success">{message}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="status">
          <Form.Label>Status</Form.Label>
          <Form.Select name="status" value={formData.status} onChange={handleChange}>
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="banned">Banned</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="profilepic">
          <Form.Label>Profile Picture URL</Form.Label>
          <Form.Control
            type="text"
            name="profilepic"
            value={formData.profilepic}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit" variant="primary">Update Profile</Button>
      </Form>
    </div>
  );
};

export default ProfilePage;
