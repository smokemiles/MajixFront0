import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import noteService from "../../services/noteService";
import tagService from "../../services/tagService";

const EditNotePage = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    noteService.getNoteById(id).then((res) => {
      setNote(res.data);
      setSelectedTags(res.data.tags.map((tag) => tag.id));
    });
    tagService.getAllTags().then((res) => setTags(res.data));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await noteService.updateNote(id, {
        title: note.title,
        content: note.content,
        tags: selectedTags,
      });
      navigate(`/notes/${id}`);
    } catch (err) {
      console.error(err);
    }
  };

  if (!note) return <div>Loading...</div>;

  return (
    <div className="container py-4">
      <h2 className="text-xl font-bold mb-4">Edit Note</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          className="form-control"
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
          required
        />
        <textarea
          className="form-control"
          rows={6}
          value={note.content}
          onChange={(e) => setNote({ ...note, content: e.target.value })}
        />
        <select
          multiple
          className="form-select"
          value={selectedTags}
          onChange={(e) =>
            setSelectedTags([...e.target.selectedOptions].map((o) => o.value))
          }
        >
          {tags.map((tag) => (
            <option key={tag.id} value={tag.id}>
              {tag.name}
            </option>
          ))}
        </select>
        <button className="btn btn-success">Update</button>
      </form>
    </div>
  );
};

export default EditNotePage;
