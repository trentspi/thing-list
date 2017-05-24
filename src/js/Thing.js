import React from 'react';
import ContentEditable from 'react-contenteditable'

import '../css/Thing.css';


const Thing = ({ thing, saveThing, removeThing}) => {
  const updateName = (ev) => {
    thing.name = ev.target.value
    saveThing(thing)
  }

  return (
    <li className="Thing">
      <input type="checkbox" />
      <div className="details">
        <ContentEditable
          className="name"
          html={thing.name}
          onChange={updateName}
        />
        <span className="actions">
        <button className="remove" onClick={() => removeThing(thing)}>
            <i className="fa fa-trash-o"></i>
          </button>
        </span>
      </div>
    </li>
  )
}

export default Thing;
