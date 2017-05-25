import React, { Component } from 'react';
import Header from './Header';
import AddThing from './AddThing';
import ThingList from './ThingList';
import SignOut from './SignOut';
import SignIn from './SignIn';
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

  signedIn = () => {
    return true;
  }

  renderMain = () => {
    const actions = {
      saveThing: this.saveThing,
      removeThing: this.removeThing
    }

    return (
      <div>
        <SignOut />
        <AddThing addThing={this.addThing}/>
        <ThingList
          things={this.state.things}
          {...actions}
        />
      </div>
    )
  }

  render() {
    //this.state.things['thing-2'];
    return (
      <div className="App">
        <Header />

        { this.signedIn() ? this.renderMain() : <SignIn /> }

      </div>
    );
  }
}

export default App;
