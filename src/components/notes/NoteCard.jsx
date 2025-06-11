import React from 'react';
import { Link } from 'react-router-dom';
import TagBadge from '../tags/TagBadge';
const NoteCard = ({ note }) => {
  return (
    <div className="card shadow-sm mb-4 border rounded-xl transition hover:shadow-lg">
      <div className="card-body">
        <h5 className="card-title text-xl font-semibold">{note.title}</h5>
        <p className="card-text text-sm text-gray-600 mb-2 truncate">
          {note.content || 'No content available.'}
        </p>
        {note.tags && (
          <div className="flex flex-wrap gap-2 mb-3">
            {note.tags.map((tag) => (
              <TagBadge key={tag.id} tag={tag} />
            ))}
          </div>
        )}
        <Link to={`/notes/${note.id}`} className="btn btn-sm btn-primary">
          View Note
        </Link>
      </div>
    </div>
  );
};

export default NoteCard;
