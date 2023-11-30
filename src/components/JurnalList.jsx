import React from "react";
import JurnalItem from "./JurnalItem";

const JurnalList = ({ jurnal, onDelete, onArchived, onSearch, name }) => {

  return (
    <>
      <h2 className="">{name}</h2>
      <div className="notes-list">
        {jurnal.length > 0 ? (
          jurnal.map((jurnal) => (
            <JurnalItem
              key={jurnal.id}
              id={jurnal.id}
              onDelete={onDelete}
              onArchived={onArchived}
              {...jurnal}
            />
          ))
        ) : (
          <div className="notes-list__empty-message">
            <p>Tidak Ada Jurnal</p>
          </div>
        )}
      </div>
    </>
  );
};

export default JurnalList;
