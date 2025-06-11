import React, { useEffect, useState } from 'react';
import noteService from '../../services/noteService';
import NoteCard from '../../components/notes/NoteCard';
import TagFilter from '../../components/tags/TagFilter';

const AllNotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [filterTag, setFilterTag] = useState(null);

  const fetchNotes = async () => {
    try {
      const response = await noteService.getNotes(filterTag);
      setNotes(response.data);
    } catch (error) {
      console.error('Failed to fetch notes:', error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [filterTag]);

  return (
    <div className="container mt-4">
      <h2 className="text-2xl font-semibold mb-4">All Notes</h2>
      <TagFilter onSelect={setFilterTag} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {notes.map(note => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default AllNotesPage;
