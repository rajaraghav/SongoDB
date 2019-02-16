import React, { Component } from "react";
import SongList from "./SongList";
import styles from "../style/style.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: "#ffe26f",
            padding: "10rem 0 1rem 3rem"
          }}
        >
          <h1 style={{ color: "#cc4165", margin: "0" }} className="">
            SongoDB
          </h1>
        </div>
        <SongList />
      </div>
    );
  }
}
