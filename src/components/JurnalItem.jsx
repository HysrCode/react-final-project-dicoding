import React from "react";
import JurnalBody from "./JurnalBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

const JurnalItem = ({ id, title, body, createdAt, onDelete, onArchived }) => {
  return (
    <div className="note-item">
      <JurnalBody title={title} body={body} createdAt={createdAt} />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchived={onArchived}/>
      </div>
    </div>
  );
};

export default JurnalItem;
