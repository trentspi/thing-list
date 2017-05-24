import React from 'react'

import '../css/AddThing.css'

const AddThing = ({ addThing }) => {
  return <button className="add-thing" onClick={addThing}>Add Something</button>
}

export default AddThing
