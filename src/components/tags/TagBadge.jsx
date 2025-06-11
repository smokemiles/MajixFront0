import React from 'react';

const TagBadge = ({ tag }) => {
  return (
    <span className="badge bg-info text-dark rounded-pill px-3 py-1 text-sm">
      {tag.name}
    </span>
  );
};

export default TagBadge;
