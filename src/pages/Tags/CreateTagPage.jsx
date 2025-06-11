import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import tagService from "../../services/tagService";
import { Button, Form, Alert } from "react-bootstrap";

const CreateTagPage = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await tagService.createTag({ name });
      navigate("/tags");
    } catch (err) {
      console.error("Create failed:", err);
      setError("Tag already exists or something went wrong.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create Tag</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleCreate}>
        <Form.Group className="mb-3">
          <Form.Label>Tag Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter tag name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default CreateTagPage;
