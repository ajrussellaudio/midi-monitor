import React, { Component } from "react";

class App extends Component {
  onMidiMessage = message => {
    console.log(message);
  };

  onMidiSuccess = midiAccess => {
    for (let input of midiAccess.inputs.values()) {
      input.onmidimessage = this.onMidiMessage;
    }
  };

  componentDidMount() {
    if (navigator.requestMIDIAccess) {
      navigator
        .requestMIDIAccess({
          sysex: false
        })
        .then(this.onMidiSuccess, console.error);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>MIDI Monitor</h1>
      </div>
    );
  }
}

export default App;
