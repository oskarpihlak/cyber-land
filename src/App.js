import React, { Component } from 'react';
import Heading from './components/Heading/Heading.js';
import './App.scss';
import Cyphering from "./components/Cyphering/Cyphering";
import Introduction from "./components/Introduction/Introduction";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <title>Küberturbe alused!</title>
        </header>
          <div className="container">
            <Navigation/>
            <Heading/>
            <Introduction/>
            <Cyphering/>
            <Footer/>
          </div>
      </div>
    );
  }
}

export default App;
