import React from 'react';

const TagFilter = ({ tags, selectedTag, onTagChange }) => {
  return (
    <div className="mb-4">
      <label className="form-label font-semibold text-sm">Filter by Tag:</label>
      <select
        className="form-select"
        value={selectedTag || ''}
        onChange={(e) => onTagChange(e.target.value)}
      >
        <option value="">All</option>
        {tags.map((tag) => (
          <option key={tag.id} value={tag.id}>
            {tag.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TagFilter;
