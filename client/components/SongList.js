import React, { Component } from "react";
import { Link } from "react-router";
import { graphql } from "react-apollo";
import deleteSong from "../queries/deleteSong";
import fetchSongs from "../queries/fetchSongs";

class SongList extends Component {
  onSongDelete(id) {
    alert("Song deletion is disabled ;) Thanks for trying.");
    // this.props.mutate({
    //   variables: { id },
    //   refetchQueries: [{ query: fetchSongs }]
    // });
  }
  renderSongs() {
    return this.props.data.songs.map(({ id, title }) => (
      <li
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
        className="collection-item"
        key={id}
      >
        <Link to={`/songs/${id}`}>{title}</Link>
        <i
          style={{ cursor: "pointer", color: "#e65550" }}
          onClick={() => this.onSongDelete(id)}
          className="material-icons"
        >
          delete
        </i>
      </li>
    ));
  }

  render() {
    if (!this.props.data.songs) {
      return <div />;
    }

    return (
      <div>
        <div
          className="container"
          style={{ overflowY: "scroll", maxHeight: "60vh" }}
        >
          <ul className="collection">{this.renderSongs()}</ul>
        </div>
        <Link
          style={{ marginRight: "2rem" }}
          to="/songs/create"
          className="btn-floating btn-large waves-effect waves-light red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(deleteSong)(graphql(fetchSongs)(SongList));
