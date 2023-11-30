import React from "react";

const ArchiveButton = ({ id, onArchived }) => {
  return (
    <button
      className="note-item__archive-button"
      onClick={() => onArchived(id)}
    >
      Archive
    </button>
  );
};

export default ArchiveButton;
