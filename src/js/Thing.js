import React from 'react';
import ContentEditable from 'react-contenteditable';
import Actions from './Actions';
import '../css/Thing.css';


class Thing extends React.Component {
  componentDidMount() {
    if (!this.nameInput.htmlEl.textContent) {
      this.nameInput.htmlEl.focus()
    }
  }

  blurOnEnter = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      ev.target.blur();
    }
  }

  updateName = (ev) => {
    const {
      thing,
      saveThing
    } = this.props
    thing.name = ev.target.value;
    saveThing(thing);
  }

  updateChecked = (ev) => {
    const {
      thing,
      saveThing
    } = this.props
    thing.checked = !thing.checked;
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
        <input type="checkbox" onChange={this.updateChecked} checked={thing.checked}/>
        <div className="details">
          <ContentEditable
            className="name"
            html={thing.name}
            onChange={this.updateName}
            onKeyPress={this.blurOnEnter}
            ref={input => this.nameInput = input}
          />
          <Actions thing={thing} saveThing={saveThing} removeThing={removeThing} />
        </div>
      </li>
    )
  }

}

export default Thing;
