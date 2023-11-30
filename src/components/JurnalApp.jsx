import React from "react";
import { getInitialData } from "../utils";
import JurnalInput from "./JurnalInput";
import JurnalSearch from "./JurnalSearch";
import JurnalList from "./JurnalList";

class JurnalApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jurnals: getInitialData(),
      parentQuery: "",
    };

    this.onAddJurnalHandler = this.onAddJurnalHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchivedHanlder = this.onArchivedHanlder.bind(this);
    this.onSearchJurnalHandler = this.onSearchJurnalHandler.bind(this);
  }

  onSearchJurnalHandler(queryInput) {
    this.setState(() => {
      return {
        parentQuery: queryInput,
      };
    });
  }

  onArchivedHanlder(id) {
    const jurnals = this.state.jurnals.map((jurnal) =>
      jurnal.id === id ? { ...jurnal, archived: !jurnal.archived } : jurnal
    );
    this.setState({ jurnals });
  }

  onDeleteHandler(id) {
    const jurnals = this.state.jurnals.filter((jurnals) => jurnals.id !== id);
    this.setState({ jurnals });
  }

  onAddJurnalHandler({ title, body }) {
    const date = new Date();
    this.setState((prevState) => {
      return {
        jurnals: [
          ...prevState.jurnals,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: date.toISOString(),
          },
        ],
      };
    });
  }

  render() {
    const activeJurnals = this.state.jurnals.filter((jurnal) => {
      return jurnal.archived === false;
    });
    const archivedJurnals = this.state.jurnals.filter((jurnal) => {
      return jurnal.archived === true;
    });

    return (
      <>
        <JurnalSearch searchJurnal={this.onAddJurnalHandler} />
        <JurnalInput addJurnal={this.onAddJurnalHandler} />
        <JurnalList
          jurnal={activeJurnals}
          onDelete={this.onDeleteHandler}
          onArchived={this.onArchivedHanlder}
          name={"Catatan Kamu"}
          onSearch={this.state.parentQuery}
        />
        <JurnalList
          jurnal={archivedJurnals}
          onDelete={this.onDeleteHandler}
          onArchived={this.onArchivedHanlder}
          name={"Archived"}
          onSearch={this.state.parentQuery}
        />
      </>
    );
  }
}

export default JurnalApp;
