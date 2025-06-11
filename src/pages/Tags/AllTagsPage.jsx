import React, { useEffect, useState } from "react";
import tagService from "../../services/tagService";
import { Link } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";

const AllTagsPage = () => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTags = async () => {
    try {
      const res = await tagService.getTags();
      setTags(res.data);
    } catch (err) {
      console.error("Failed to fetch tags:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this tag?")) {
      try {
        await tagService.deleteTag(id);
        fetchTags();
      } catch (err) {
        console.error("Delete failed:", err);
      }
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>All Tags</h2>
        <Link to="/tags/create">
          <Button variant="primary">Create Tag</Button>
        </Link>
      </div>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <ul className="list-group">
          {tags.map((tag) => (
            <li key={tag.id} className="list-group-item d-flex justify-content-between">
              <span>{tag.name}</span>
              <div>
                <Link to={`/tags/edit/${tag.id}`} className="btn btn-sm btn-warning me-2">
                  Edit
                </Link>
                <Button variant="danger" size="sm" onClick={() => handleDelete(tag.id)}>
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllTagsPage;
