import React, { Component } from 'react';
import Header from './Header';
import AddThing from './AddThing';
import ThingList from './ThingList';
import base from './base';

import '../css/App.css';

class App extends Component {

  componentWillMount() {
    base.syncState(
      'things',
      {
        context: this,
        state: 'things'
      }
    )
  }

  state = {
    things: {}
  }

  thing() {
    return {
      id: `thing-${Date.now()}`,
      name: '',
      checked: '',
      dueOn: '',
    }
  }

  addThing = () => {
    const things = {...this.state.things} //makes a copy
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
    things[thing.id] = null;
    this.setState({ things });
  }

  render() {
    //this.state.things['thing-2'];
    const actions = {
      saveThing: this.saveThing,
      removeThing: this.removeThing
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
