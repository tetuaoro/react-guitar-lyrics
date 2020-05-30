import React, { PureComponent } from "react";
import PropTypes from "prop-types";

// Import custom components
import Chord from "../Chord/Chord";

// Import styles from css
import "./styles.css";

// Import chords dataSource
import chords from "../../assets/chords";

// Define regular expression to get the chord
const chordRegExp = /(?:\[([^\]]*)])?(.)?([^[]*)/g;
const isMajorChar = /[A-Z]/;

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
 * @param {Boolean} [isEmbedChord=false] - 2 display modes : letter chord or image svg chord
 * @param {Object} [chordStyle] - custom chord with color and font-weight
 * @param {String} [chordStyle.color] - the color 
 * @param {Number} [chordStyle.fontWeight] - the font-weight 
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

  /**
   * Give a style to anchor according to its type
   */
  mapAnchorStyle = (anchor, index) => {
    return {
      width: isMajorChar.test(anchor) ? 0.8 + 'em' : 0.5 + 'em',
    };
  };

  render() {
    const { children, isEmbedChord, chordStyle } = this.props;

    const style = {
      display: "inline-block",
      backgroundColor: "red",
      color: "white",
    };

    return (
      <div>
        {/* The offset to split each lyrics when the chord is embeded, uncomment to make it */}
        {/* {isEmbedChord && <div style={{ height: 30 }} />} */}
        <p className="ge-lyrics">
          {
            // Map each chord data to the lyrics
            this.mapChords(children).map((chordData, index) => {
              let chord = searchChord(chordData.name);

              return chordData.index > 0 ? (
                // if chord exist
                chord ? (
                  // Start with chord
                  <span className="ge-chord-item" key={index}>
                    <span
                      style={this.mapAnchorStyle(
                        chordData.anchor,
                        chordData.index
                      )}
                      className="ge-anchor"
                    >
                      {/* Anchor chord */}
                      {isEmbedChord ? (
                        <span className="ge-anchor-chordimg">
                          <Chord chord={chord} options={{ size: "small" }} />
                          <span className="ge-anchor-chordimg-large">
                            <Chord chord={chord} options={{ size: "large" }} />
                          </span>
                        </span>
                      ) : (
                          <span className="ge-anchor-chordname" style={chordStyle}>
                            {chordData.name}
                          </span>
                        )}
                      {/* Anchor Text */}
                      <span className="gd-anchor">{chordData.anchor}</span>
                    </span>
                    <span className="ge-extra">{chordData.extra}</span>
                  </span>
                ) : (
                    <span key={index} style={style}>
                      Verifier vos notes de musiques.
                    </span>
                  )
              ) : (
                  // Normal sentence
                  <span key={index}>
                    <span>{chordData.anchor}</span>
                    <span>{chordData.extra}</span>
                  </span>
                );
            })
          }
        </p>
      </div>
    );
  }
}

Lyrics.propTypes = {
  isEmbedChord: PropTypes.bool,
  chordStyle: PropTypes.shape({
    color: PropTypes.string,
    fontWeight: PropTypes.number,
  })
};

Lyrics.defaultProps = {
  isEmbedChord: false,
  chordStyle: {
    color: 'indianred',
    fontWeight: 510,
  }
};
