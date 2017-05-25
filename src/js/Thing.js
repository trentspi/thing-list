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

  handleChange = (ev) => {
    const {
      thing,
      saveThing
    } = this.props
    const field = ev.currentTarget.getAttribute('name');
    thing[field] = ev.target.value;
    saveThing(thing);
  }

  updateChecked = (ev) => {
    const {
      thing,
      saveThing
    } = this.props
    thing.checked = ev.target.checked;
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
            name="name"
            html={thing.name}
            onChange={this.handleChange}
            onKeyPress={this.blurOnEnter}
            ref={input => this.nameInput = input}
          />
          <input
            type="date"
            id="datepicker"
            name="dueOn"
            placeholder="Due Date"
            defaultValue={thing.dueOn}
            onChange={this.handleChange}
          />
          <Actions thing={thing} saveThing={saveThing} removeThing={removeThing} />
        </div>
      </li>
    )
  }

}

export default Thing;
