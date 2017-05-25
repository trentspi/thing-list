import React, { Component } from 'react';
import Header from './Header';
import AddThing from './AddThing';
import ThingList from './ThingList';
import SignOut from './SignOut';
import SignIn from './SignIn';
import base, {auth} from './base';

import '../css/App.css';

class App extends Component {
  state = {
    things: {},
    uid: null,
  }

  componentWillMount() {
    auth.onAuthStateChanged(
      (user) => {
        if(user) {
          this.authHandler({ user });
        }
      }
    )
  }

  authHandler = (authData) => {
    this.setState(
      { uid: authData.user.uid },
      this.syncThings
    )
  }

  syncThings = () => {
    base.syncState(
      `${this.state.uid}/things`,
      {
        context: this,
        state: 'things'
      }
    )
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
    return this.state.uid;
  }

  signOut = () => {
    auth
      .signOut()
      .then(() => this.setState({ uid: null }))
  }

  renderMain = () => {
    const actions = {
      saveThing: this.saveThing,
      removeThing: this.removeThing
    }

    return (
      <div>
        <SignOut signOut={this.signOut} />
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

        { this.signedIn() ? this.renderMain() : <SignIn authHandler={this.authHandler}/> }

      </div>
    );
  }
}

export default App;
