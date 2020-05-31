import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

// Import styles from css
import "./styles.css";

// Import chords dataSource
import chords from "../../assets/chords";

// Define regular expression to get the chord
const chordRegExp = /(?:\[([^\]]*)])?(.)?([^[]*)/g;

const searchChord = (name) => {
  let chordsLen = chords.length;

  for (let i = 0; i < chordsLen; i++) {
    if (chords[i].name === name) {
      return chords[i];
    }
  }
};

/**
 *
 * Rendering your chords between bracket and styling with custom props
 * 
 * @param {Object} [chordStyle] - styling with your own css
 *
 * @export
 * @class Lyrics
 * @extends {PureComponent}
 */
export default class Lyrics extends PureComponent {
  /**
   * Method to map chords inside the string
   */
  mapChords = (line) => {
    let chords = [];
    let offset = 2;

    // if line is an props
    if (typeof line !== 'string') {
      line = line.toString();
    }

    // Extract information from a piece of lyrics
    line.replace(chordRegExp, (match, chord, anchor, extra, index) => {
      // Filter empty line
      if (chord || (anchor && extra)) {
        chords.push({
          name: chord,
          line: line,
          index: chord ? chord.length + index + offset : -1,
          anchor: anchor ? anchor : "",
          extra: extra ? extra : "",
        });
      }
    });

    return chords;
  };

  render() {

    const { children, chordStyle, LineStyle } = this.props;

    return (
      <div>
        <pre className="ge-lyrics" style={LineStyle}>
          {
            this.mapChords(children).map((chordData, index) => {
              let chord = searchChord(chordData.name);
              return chordData.index > 0 ? (
                chord ? (
                  <span className="ge-chord-item" key={index}>
                    <span className="ge-anchor">
                      {/* Anchor chord */}
                      <span className="ge-anchor-chordname" style={chordStyle}>
                        {chordData.name}
                      </span>
                      {/* Anchor Text */}
                      <span className="gd-anchor">{chordData.anchor}</span>
                    </span>
                    <span className="ge-extra">{chordData.extra}</span>
                  </span>
                ) : (
                    // Error chord doesn't exist
                    <span key={index} className="ge-error-chord">
                      Verifier vos notes de musiques.
                    </span>
                  )
              ) : (
                  // Normal sentence
                  <span key={index} className="ge-normal-text">
                    <span>{chordData.anchor}</span>
                    <span>{chordData.extra}</span>
                  </span>
                );
            })
          }
        </pre>
      </div>
    );
  }
};

Lyrics.propTypes = {
  chordStyle: PropTypes.object,
  LineStyle: PropTypes.object,
};

Lyrics.defaultProps = {
  chordStyle: {
    color: 'indianred',
    fontWeight: 510,
  }
};