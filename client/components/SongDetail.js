import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import gql from "graphql-tag";
import LyricList from "./LyricList";
import LyricCreate from "./LyricCreate";

class SongDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lyricCreateVisible: false
    };
  }
  render() {
    const { song } = this.props.data;
    console.log(song);
    if (!song) {
      return <div />;
    }

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
          <h3 style={{ color: "#e65550" }}>{song.title}</h3>
        </div>
        <div
          className="container"
          style={{ overflowY: "scroll", maxHeight: "60vh" }}
        >
          <LyricList
            refetch={this.props.data.refetch}
            songId={this.props.params.id}
            lyrics={song.lyrics}
          />
          {this.state.lyricCreateVisible && (
            <LyricCreate songId={this.props.params.id} />
          )}
          {!this.state.lyricCreateVisible && (
            <div
              onClick={() =>
                this.setState({
                  lyricCreateVisible: !this.state.lyricCreateVisible
                })
              }
              className="btn-floating btn-large waves-effect waves-light red right"
            >
              <i className="material-icons">add</i>
            </div>
          )}
        </div>
      </div>
    );
  }
}
const query = gql`
  query GetSong($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;
export default graphql(query, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);
