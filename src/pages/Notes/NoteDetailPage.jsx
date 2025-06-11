import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import noteService from '../../services/noteService';
import TagBadge from '../../components/tags/TagBadge';

const NoteDetailPage = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await noteService.getNoteById(id);
        setNote(response.data);
      } catch (error) {
        console.error('Failed to fetch note:', error);
      }
    };

    fetchNote();
  }, [id]);

  if (!note) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-4">
      <h2 className="text-3xl font-bold mb-2">{note.title}</h2>
      <div className="mb-2 text-muted text-sm">{new Date(note.created_at).toLocaleString()}</div>
      <div className="mb-3">{note.content}</div>
      {note.tags && note.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {note.tags.map(tag => (
            <TagBadge key={tag.id} name={tag.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NoteDetailPage;
