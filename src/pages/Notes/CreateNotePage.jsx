import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import noteService from "../../services/noteService";
import tagService from "../../services/tagService";

const CreateNotePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    tagService.getAllTags().then((res) => setTags(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await noteService.createNote({
        title,
        content,
        tags: selectedTags,
      });
      navigate("/notes");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container py-4">
      <h2 className="text-xl font-bold mb-4">Create New Note</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="form-control"
          placeholder="Content"
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <select
          multiple
          className="form-select"
          onChange={(e) =>
            setSelectedTags([...e.target.selectedOptions].map((o) => o.value))
          }
        >
          {tags.map((tag) => (
            <option value={tag.id} key={tag.id}>
              {tag.name}
            </option>
          ))}
        </select>
        <button className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};

export default CreateNotePage;
