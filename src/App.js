import React, { Component } from "react";

import Lyrics from "./components/Lyrics/Lyrics";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      configChord: {},
      configLine: {}
    };
  }

  componentDidMount() {
    this.setState({
      configChord: {
        color: 'green',
        fontWeight: 520,
      },
      configLine: {
        overflow: 'visible'
      }
    });
  }

  render() {
    const { configChord, configLine } = this.state;
    return (
      <div className="App">
        <div className="item-lyrics">
          <Lyrics chordStyle={configChord} LineStyle={configLine}>Je me[G] sens libre</Lyrics>
          <Lyrics chordStyle={configChord} LineStyle={configLine}>
            [C]Et je suis, t[F]u es, et [Gm]rien
          </Lyrics>
          <Lyrics chordStyle={configChord} LineStyle={configLine}>Je m[F]i sens libre[F]</Lyrics>
          <Lyrics chordStyle={configChord} LineStyle={configLine}>[C]Je me[J] sens libre</Lyrics>
          <Lyrics chordStyle={configChord} LineStyle={configLine}>Je me sens libr[G]e</Lyrics>
          <Lyrics chordStyle={configChord} LineStyle={configLine}>Je me l[F]e sens [G]libre</Lyrics>
          <Lyrics chordStyle={configChord} LineStyle={configLine}>[G]   [D]Je suis donc [G]</Lyrics>
        </div>
      </div>
    );
  }
}

export default App;
