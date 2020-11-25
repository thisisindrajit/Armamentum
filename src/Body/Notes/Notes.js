import React, { PureComponent } from "react";
import "./notes.css";
import autosize from "autosize";

export default class Notes extends PureComponent {
  constructor() {
    super();
    this.state = {
      notes: [],
      isLoading: true,
      isUpdating: false,
      newnotetitle: "",
      newnotebody: "",
      showcreatenewnotebox: false,
      updateStatus: [],
    };
  }

  //https://armamentum.herokuapp.com/notes is the link for the hosted nodejs server

  componentDidMount() {
    //autosize(this.notebody);

    fetch("https://armamentum.herokuapp.com/notes")
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
      body: this.state.newnotebody,
    };

    fetch("https://armamentum.herokuapp.com/notes/postnote", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        fetch("https://armamentum.herokuapp.com/notes")
          .then((res) => res.json())
          .then((res) => {
            let updateStatus = [];

            //updateStatus for each note fetched from API
            res.forEach((val, index) => {
              updateStatus[index] = "";
            });

            this.setState({
              notes: res,
              isLoading: false,
              newnotetitle: "",
              newnotebody: "",
              showcreatenewnotebox: false,
              updateStatus: updateStatus,
            });
          });
      });
  };

  openbox = () => {
    this.setState({ showcreatenewnotebox: !this.state.showcreatenewnotebox });
  };

  createnoteinputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateHandler = (id, index) => {
    let updateStatus = this.state.updateStatus;
    updateStatus[index] = "Updating...";

    this.setState({ isUpdating: true, updateStatus: updateStatus });

    const newbody = {
      title: this.state.notes[index][2],
      body: this.state.notes[index][1],
    };

    fetch("https://armamentum.herokuapp.com/notes/updatenote/" + id, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newbody),
    }).then(() => {
      //console.log(res);
      updateStatus[index] = "Updated!";
      this.setState({ isUpdating: false, updateStatus: updateStatus });
      //alert("Updated note!");
    });
  };

  deleteHandler = (id) => {
    fetch("https://armamentum.herokuapp.com/notes/deletenote/" + id, {
      method: "DELETE",
    }).then(() => {
      fetch("https://armamentum.herokuapp.com/notes")
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            notes: res,
            isLoading: false,
            showcreatenewnotebox: false,
          });
        });
    });
  };

  render() {
    //console.log(this.props.name);

    console.log(this.props.user);

    //for now I have hardcoded the name (which is my email id in this case). Must change it later!
    return this.props.user.email === "indrajitvijayakumar@gmail.com" ? 
    (
      <div id="notes">
        <div id="create-new-note" onClick={() => this.openbox()}>
          Create a new note
        </div>
        {this.state.isLoading === true ? (
          <div id="loading">Loading your notes...</div>
        ) : (
          this.state.showcreatenewnotebox && (
            <div id="create-new-note-box">
              <textarea
                className="note-title"
                name={"newnotetitle"}
                onChange={(e) => this.createnoteinputHandler(e)}
                placeholder={"Note title"}
                value={this.state.newnotetitle}
                rows={1}
              ></textarea>
              <div className="note-body">
                <textarea
                  className="note-textarea"
                  name={"newnotebody"}
                  onChange={(e) => this.createnoteinputHandler(e)}
                  placeholder={"Note body"}
                  value={this.state.newnotebody}
                  rows={1}
                ></textarea>
              </div>
              <div className="buttons">
                <div
                  id="create-note-button"
                  onClick={() => this.createHandler()}
                >
                  Create
                </div>
              </div>
            </div>
          )
        )}
        {this.state.notes.map((note, index) => {
          return (
            <div className="note" key={note[3]["@ref"].id}>
              <textarea
                className="note-title"
                name={"title"}
                onChange={(e) => this.inputHandler(e, index, 2)}
                defaultValue={note[2]}
                rows={1}
              ></textarea>
              <div className="note-body">
                <textarea
                  className="note-textarea"
                  name={"body"}
                  onChange={(e) => this.inputHandler(e, index, 1)}
                  defaultValue={note[1]}
                  rows={1}
                ></textarea>
              </div>
              <div className="buttons">
                <div className="update-status">
                  {this.state.updateStatus[index]}
                </div>
                <div
                  className="delete-button"
                  onClick={() => this.deleteHandler(note[3]["@ref"].id)}
                >
                  Delete
                </div>
                <div
                  className="save-button"
                  onClick={() => this.updateHandler(note[3]["@ref"].id, index)}
                >
                  Save
                </div>
              </div>
            </div>
          );
        })}
      </div>
    ) : (
      <div id="loading">Notes Widget coming soon for you!</div>
    );
  }
}
