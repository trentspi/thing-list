import React from 'react';

import '../css/Thing.css';

const Thing = ({ thing }) => {
  return (
    <li className="Thing">
      <input type="checkbox" />
      <div className="details">
        <div className="name">
          {thing.name}
        </div>
        <span className="actions">
          <button className="remove">
            <i className="fa fa-trash-o"></i>
          </button>
        </span>
      </div>
    </li>
  )
}

export default Thing;
