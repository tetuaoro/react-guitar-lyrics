import React, { Component } from "react";

import Lyrics from "./components/Lyrics/Lyrics";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      embed: false,
      config: {
        color: "",
        fontWeight: 0,
      },
    };
    this.handleEmbedChord = this.handleEmbedChord.bind(this);
  }

  componentDidMount() {
    this.setState({
      embed: false,
      config: {
        color: "green",
        fontWeight: 520,
      },
    });
  }

  handleEmbedChord() {
    this.setState({ embed: !this.state.embed });
  }

  render() {
    const { embed, config } = this.state;
    return (
      <div className="App">
        <label htmlFor="checkbox">Embed chord ?</label>
        <input
          type="checkbox"
          id="checkbox"
          defaultChecked={false}
          onChange={this.handleEmbedChord}
        />
        <Lyrics isEmbedChord={embed} chordStyle={config}>
          Je me[G] sens libre
        </Lyrics>
        <Lyrics isEmbedChord={embed} chordStyle={config}>
          [C]Et je suis, t[F]u es, et [Gm]rien
        </Lyrics>
        <Lyrics isEmbedChord={embed} chordStyle={config}>Je m[F]i sens libre[F] </Lyrics>
        <Lyrics isEmbedChord={embed} chordStyle={config}>Je me[J] sens libre</Lyrics>
        <Lyrics isEmbedChord={embed} chordStyle={config}>Je me sens libr[G]e</Lyrics>
        <Lyrics isEmbedChord={embed} chordStyle={config}>Je me l[F]e sens [G]libre</Lyrics>
        <Lyrics isEmbedChord={embed} chordStyle={config}>[G]   [D] Je suis donc [G] </Lyrics>
      </div>
    );
  }
}

export default App;
