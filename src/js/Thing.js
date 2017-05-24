import React from 'react';
import ContentEditable from 'react-contenteditable';
import Actions from './Actions';
import '../css/Thing.css';


class Thing extends React.Component {
  componentDidMount() {
    this.nameInput.htmlEl.focus();
  }

  updateName = (ev) => {
    const {
      thing,
      saveThing,
      removeThing
    } = this.props
    thing.name = ev.target.value;
    saveThing(thing);
  }



  render() {
    const {
      thing,
      saveThing,
      removeThing
    } = this.props
    return (
      <li className="Thing">
        <input type="checkbox" />
        <div className="details">
          <ContentEditable
            className="name"
            html={thing.name}
            onChange={this.updateName}
            ref={input => this.nameInput = input}
          />
          <Actions thing={thing} saveThing={saveThing} removeThing={removeThing} />
        </div>
      </li>
    )
  }

}

export default Thing;
