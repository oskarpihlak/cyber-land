import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.scss';

import Heading from './components/Heading/Heading.js';
import Cyphering from './components/Cyphering/Cyphering';
import Introduction from './components/CypherCore/CypherCore';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <div className='container'>
            <Navigation/>
            <Heading/>
            <Introduction/>
            <Cyphering/>
            <Footer/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
