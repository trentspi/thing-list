import React, { Component } from 'react';
import Header from './Header';
import AddThing from './AddThing';
import ThingList from './ThingList';

import '../css/App.css';

class App extends Component {
  state = {
    things: {}
  }

  thing() {
    return {
      id: `thing-${Date.now()}`,
      name: '',
    }
  }

  addThing = () => {
    const things = {...this.state.things}
    const thing = this.thing();
    things[thing.id] = thing;
    this.setState({ things });
  }

  saveThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = thing;
    this.setState({ things });
  }

  removeThing = (thing) => {
    const things = {...this.state.things}
    delete things[thing.id];
    this.setState({ things });
  }

  render() {
    //this.state.things['thing-2'];
    const actions = {
      saveThing: this.saveThing,
      removeThing: this.removeThing,
    }

    return (
      <div className="App">
        <Header />
        <AddThing addThing={this.addThing}/>
        <ThingList
          things={this.state.things}
          {...actions}
        />
      </div>
    );
  }
}

export default App;
