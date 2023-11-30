import React from "react";

class JurnalSearch extends React.Component {
  constructor(prosp) {
    super(prosp);
    this.state = {
      search: "",
    };

    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
  }

  onSearchChangeHandler(event) {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        ...prevState,
        search: event.target.value,
      };
    });
  }

  render() {
    return (
      <div className="note-app__header">
        <h1>Jurnal_Ku</h1>
        <input
          type="text"
          placeholder="Cari || OnDevelop"
          onChange={this.onSearchChangeHandler}
          disabled
        />
      </div>
    );
  }
}

export default JurnalSearch;
