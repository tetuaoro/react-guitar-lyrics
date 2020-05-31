import React, { Component } from "react";

import Lyrics from "./components/Lyrics/Lyrics";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        color: "",
        fontWeight: 0,
      },
    };
  }

  componentDidMount() {
    this.setState({
      config: {
        color: "green",
        fontWeight: 520,
      },
    });
  }

  render() {
    const { config } = this.state;
    return (
      <div className="App">
        <div className="item-lyrics">
          <Lyrics chordStyle={config}>Je me[G] sens libre</Lyrics>
          <Lyrics chordStyle={config}>
            [C]Et je suis, t[F]u es, et [Gm]rien
          </Lyrics>
          <Lyrics chordStyle={config}>Je m[F]i sens libre[F]</Lyrics>
          <Lyrics chordStyle={config}>[C]Je me[J] sens libre</Lyrics>
          <Lyrics chordStyle={config}>Je me sens libr[G]e</Lyrics>
          <Lyrics chordStyle={config}>Je me l[F]e sens [G]libre</Lyrics>
          <Lyrics chordStyle={config}>[G]   [D]Je suis donc [G]</Lyrics>
        </div>
      </div>
    );
  }
}

export default App;
