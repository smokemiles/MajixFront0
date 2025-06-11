import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import tagService from "../../services/tagService";
import { Button, Form, Alert, Spinner } from "react-bootstrap";

const EditTagPage = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTag = async () => {
      try {
        const res = await tagService.getTag(id);
        setName(res.data.name);
      } catch (err) {
        console.error("Failed to load tag:", err);
        setError("Failed to load tag.");
      } finally {
        setLoading(false);
      }
    };
    fetchTag();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await tagService.updateTag(id, { name });
      navigate("/tags");
    } catch (err) {
      console.error("Update failed:", err);
      setError("Update failed. Make sure tag is unique.");
    }
  };

  if (loading) return <Spinner className="m-4" animation="border" />;

  return (
    <div className="container mt-4">
      <h2>Edit Tag</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleUpdate}>
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
        <Button variant="success" type="submit">
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default EditTagPage;
