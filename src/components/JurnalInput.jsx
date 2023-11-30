import React from "react";

class JurnalInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      titleChar: 50,
    };
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    const titleText = event.target.value;
    const remainingChars = 50 - titleText.length;

    if (remainingChars >= 0) {
      this.setState({
        title: titleText,
        titleChar: remainingChars,
      });
    }
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    console.log(this.state)
    this.props.addJurnal(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
        titleChar: 50,
      };
    });
  }

  render() {
    return (
      <div className="note-input">
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">
            Sisa karakter: {this.state.titleChar}
          </p>
          <h2 className="note-input__title">Buat Jurnal</h2>
          <input
            type="text"
            placeholder="Masukan Judul Jurnal Kamu"
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
          />
          <textarea
            type="text"
            placeholder="Masukan isi contentnya"
            value={this.state.body}
            onChange={this.onBodyChangeHandler}
          />
          <button type="submit">Buat Jurnal</button>
        </form>
      </div>
    );
  }
}

export default JurnalInput;
