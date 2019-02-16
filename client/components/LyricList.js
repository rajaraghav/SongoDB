import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class LyricList extends Component {
  onLike(lyric) {
    this.props.mutate({
      variables: { id: lyric.id },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id: lyric.id,
          __typename: "Lyric",
          likes: lyric.likes + 1
        }
      }
    });
  }

  renderLyrics() {
    if (this.props.lyrics && this.props.lyrics.length)
      return this.props.lyrics
        .slice("0")
        .sort((l1, l2) => l2.likes - l1.likes)
        .map(lyric => {
          return (
            <li key={lyric.id} className="collection-item">
              <div>{lyric.content}</div>
              <div
                style={{
                  color: "#3bbbd6",
                  display: "flex",
                  alignItems: "center"
                }}
                className="vote-box"
              >
                <i
                  style={{ cursor: "pointer", marginRight: ".3rem" }}
                  onClick={() => this.onLike(lyric)}
                  className="material-icons"
                >
                  thumb_up
                </i>
                {lyric.likes}
              </div>
            </li>
          );
        });
    else return <div className="collection-item">No lyrics found</div>;
  }

  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID!) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(mutation)(LyricList);
