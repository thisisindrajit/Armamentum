import React, { PureComponent } from "react";
import "./notes.css";
import autosize from "autosize";
import { withAuth0 } from "@auth0/auth0-react";

class Notes extends PureComponent {
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
      createStatus:"",
      rawuserjwt: "",
    };
  }

  //https://armamentum.herokuapp.com/notes is the link for the hosted nodejs server

  async componentDidMount() {
    //autosize(this.notebody);
    const { getAccessTokenSilently, getIdTokenClaims } = this.props.auth0;

    await getIdTokenClaims().then((res) => {
      this.setState({ rawuserjwt: res.__raw }); //this is the raw JWT containing all the user details
    });

    getAccessTokenSilently({
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    }).then((token) =>
      fetch("https://armamentum.herokuapp.com/notes", {
        headers: {
          userjwt: this.state.rawuserjwt,
          Authorization: `Bearer ${token}`,
          email: this.props.user.email,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          //console.log(token);
          //console.log(res);
          this.setState({ notes: res, isLoading: false });
        })
        .catch((err) => {
          console.log(err);
        })
    );
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
      email: this.props.user.email,
    };

    this.setState({createStatus:"Creating note..."});

    const { getAccessTokenSilently } = this.props.auth0;

    getAccessTokenSilently({
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    }).then((token) => {
      fetch("https://armamentum.herokuapp.com/notes/postnote", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          userjwt: this.state.rawuserjwt,
          email: this.props.user.email,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then(() => {
          const { getAccessTokenSilently } = this.props.auth0;

          getAccessTokenSilently({
            audience: process.env.REACT_APP_AUTH0_AUDIENCE,
          }).then((token) =>
            fetch("https://armamentum.herokuapp.com/notes", {
              headers: {
                Authorization: `Bearer ${token}`,
                userjwt: this.state.rawuserjwt,
                email: this.props.user.email,
              },
            })
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
                  createStatus: ""
                });
              })
          );
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
    const { getAccessTokenSilently } = this.props.auth0;
    let updateStatus = this.state.updateStatus;
    updateStatus[index] = "Updating...";

    this.setState({ isUpdating: true, updateStatus: updateStatus });

    const newbody = {
      title: this.state.notes[index][2],
      body: this.state.notes[index][1],
      email: this.props.user.email,
    };

    getAccessTokenSilently({
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    }).then((token) => {
      fetch("https://armamentum.herokuapp.com/notes/updatenote/" + id, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          userjwt: this.state.rawuserjwt,
          email: this.props.user.email,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newbody),
      }).then(() => {
        //console.log(res);
        updateStatus[index] = "Updated!";
        this.setState({ isUpdating: false, updateStatus: updateStatus });
        //alert("Updated note!");
      });
    });
  };

  deleteHandler = (id, index) => {
    const { getAccessTokenSilently } = this.props.auth0;

    let updateStatus = this.state.updateStatus;
    updateStatus[index] = "Deleting note...";

    this.setState({ isUpdating: true, updateStatus: updateStatus });

    getAccessTokenSilently({
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    }).then((token) => {
      fetch("https://armamentum.herokuapp.com/notes/deletenote/" + id, {
        method: "DELETE",
        headers: {
          userjwt: this.state.rawuserjwt,
          email: this.props.user.email,
          Authorization: `Bearer ${token}`,
        },
      }).then(() => {
        const { getAccessTokenSilently } = this.props.auth0;

        getAccessTokenSilently({
          audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        }).then((token) =>
          fetch("https://armamentum.herokuapp.com/notes", {
            headers: {
              userjwt: this.state.rawuserjwt,
              Authorization: `Bearer ${token}`,
              email: this.props.user.email,
            },
          })
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
                showcreatenewnotebox: false,
                isUpdating: false,
                updateStatus: updateStatus
              });
            })
        );
      });
    });
  };

  render() {
    //console.log(this.props.name);
    //console.log(this.props.user.email);

    //for now I have hardcoded the name (which is my email id in this case). Must change it later!
    return this.state.isLoading === true ? (
      <div id="loading">Loading your 🗒️notes...</div>
    ) : (
      <div id="notes">
        <div id="create-new-note" onClick={() => this.openbox()}>
          Create a new note
        </div>
        {this.state.showcreatenewnotebox && (
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
              <div className="update-status">{this.state.createStatus}</div>
              <div id="create-note-button" onClick={this.state.createStatus.length > 0 ? null : () => this.createHandler()}>
                Create
              </div>
            </div>
          </div>
        )}
        {this.state.notes.map((note, index) => {
          return (
            <div className="note" key={note[4]["@ref"].id}>
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
                  onClick={() => this.deleteHandler(note[4]["@ref"].id, index)}
                >
                  Delete
                </div>
                <div
                  className="save-button"
                  onClick={() => this.updateHandler(note[4]["@ref"].id, index)}
                >
                  Save
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withAuth0(Notes);
