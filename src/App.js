import React, { Component } from 'react';
import Heading from './components/Header/Heading.js';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <title>Küberturbe alused!</title>
        </header>
          <div className="container">
            <Heading/>
          </div>
      </div>
    );
  }
}

export default App;
