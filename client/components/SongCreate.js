import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { hashHistory, Link } from "react-router";
import fetchQuery from "../queries/fetchSongs";

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { title: "" };
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.props);
    this.props
      .mutate({
        variables: { title: this.state.title },
        refetchQueries: [{ query: fetchQuery }]
      })
      .then(() => hashHistory.push("/"))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: "#ffe26f",
            padding: "10rem 0 1rem 3rem",
            display: "flex",
            alignItems: "center"
          }}
        >
          <Link style={{ marginRight: "1rem" }} to="/">
            {" "}
            <i className="material-icons">arrow_back</i>
          </Link>
          <h3 style={{ color: "#e4734f" }}>Create a new Song</h3>
        </div>
        <div className="container">
          <form onSubmit={this.onSubmit.bind(this)}>
            <label>Song Title</label>
            <input
              onChange={event => this.setState({ title: event.target.value })}
              value={this.state.title}
            />
          </form>
        </div>
      </div>
    );
  }
}
const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
