import React, { Component } from "react";

import Lyrics from "./components/Lyrics/Lyrics";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Lyrics isEmbedChord={true}>Je me sens libre[G]</Lyrics>
        <Lyrics isEmbedChord={true}>Je suis fragil[Fm]e</Lyrics>
        <Lyrics isEmbedChord={true}>[Cm] C[E]omment m'as-[Am]tu abondoné</Lyrics>
        <Lyrics isEmbedChord={true}>Mais ou est donc or ni car</Lyrics>
        <Lyrics isEmbedChord={true}>[C]Hey man ou est donc or[N] ni car</Lyrics>
      </div>
    );
  }
}

export default App;
