import React, { Component } from "react";

import Lyrics from "./components/Lyrics/Lyrics";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      embed: Boolean,
    };
    this.handleEmbedChord = this.handleEmbedChord.bind(this);
  }

  componentDidMount() {
    this.setState({
      embed: false,
    });
  }

  handleEmbedChord() {
    this.setState({ embed: !this.state.embed });
  }

  render() {
    const { embed } = this.state;
    return (
      <div className="App">
        <label htmlFor="checkbox">Embed chord ?</label>
        <input
          type="checkbox"
          id="checkbox"
          defaultChecked={false}
          onChange={this.handleEmbedChord}
        />
        <Lyrics isEmbedChord={embed}>Je m'[G]w qens libre</Lyrics>
        <Lyrics isEmbedChord={embed}>
          [C]Et je suis, t[F]u es, et [Gm]rien
        </Lyrics>
      </div>
    );
  }
}

export default App;
