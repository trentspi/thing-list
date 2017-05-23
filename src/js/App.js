import React, { Component } from 'react';
import Header from './Header';
import ThingList from './ThingList';

import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ThingList />
      </div>
    );
  }
}

export default App;
