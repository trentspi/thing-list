import React from 'react';
import ContentEditable from 'react-contenteditable';
import Actions from './Actions';
import '../css/Thing.css';


const Thing = ({ thing, saveThing, removeThing}) => {
  const updateName = (ev) => {
    thing.name = ev.target.value;
    saveThing(thing);
  }

  const props = {
    thing,
    saveThing,
    removeThing
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
        <Actions {...props}/>
      </div>
    </li>
  )
}

export default Thing;
