import React, { PureComponent } from "react";
import "./notes.css";
import autosize from "autosize";

export default class Notes extends PureComponent {
  constructor() {
    super();
    this.state = {
      notes: [],
      isLoading: true,
      newnotetitle:"Post title", 
      newnotebody:"Post body"
    };
  }

  componentDidMount() {
    //autosize(this.notebody);

    fetch("http://localhost:5000/notes")
      .then((res) => res.json())
      .then((res) => {
        //console.log(res);
        this.setState({ notes: res, isLoading: false });
      });
  }

  componentDidUpdate() {
    autosize(document.querySelectorAll(".note-title"));
    autosize(document.querySelectorAll(".note-textarea"));
  }

  inputHandler = (e, index, secindex) => {
    const newNotes = [...this.state.notes];
    newNotes[index][secindex] = e.target.value;
    this.setState({ notes: newNotes });
  };

  createHandler = () => {

    const data = {
      title: this.state.newnotetitle,
      body: this.state.newnotebody
    }

    fetch("http://localhost:5000/notes/postnote", {
      method: "POST",
      headers:{'Content-type': 'application/json'},
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {

        fetch("http://localhost:5000/notes")
          .then((res) => res.json())
          .then((res) => {
            this.setState({ notes: res, isLoading: false });
          });
      });
  }

  updateHandler = (id, index) => {

    const newbody = {
        title: this.state.notes[index][1],
        body: this.state.notes[index][0]
    }

    fetch("http://localhost:5000/notes/updatenote/" + id, {
      method: "PUT",
      headers:{'Content-type': 'application/json'},
      body: JSON.stringify(newbody),
    })
      .then((res) => {
        //console.log(res);
        alert("Updated note!");
      });
  };

  render() {
    return (
      <div id="notes">
        {this.state.isLoading === true
          ? "Loading notes..."
          : 
          this.state.notes.map((note, index) => {
              return (
                <div className="note" key={note[2]["@ref"].id}>
                  <textarea
                    className="note-title"
                    name={"title"}
                    onChange={(e) => this.inputHandler(e, index, 1)}
                    defaultValue={note[1]}
                    rows={1}
                  ></textarea>
                  <div className="note-body">
                    <textarea
                      className="note-textarea"
                      name={"body"}
                      onChange={(e) => this.inputHandler(e, index, 0)}
                      defaultValue={note[0]}
                      rows={1}
                    ></textarea>
                  </div>
                  <div
                    className="save-button"
                    onClick={() =>
                      this.updateHandler(note[2]["@ref"].id, index)
                    }
                  >
                    Save
                  </div>
                </div>
              );
            })}
      <div id="create-new-note" onClick={() => this.createHandler()}>Create a new note</div> 
      </div>
    );
  }
}
