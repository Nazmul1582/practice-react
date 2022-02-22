import React, { useState } from 'react'

export default function UseStateWithObjArr() {
  const [name, setName] = useState({firstName: "", lastName: ""})
  const [values, setValues] = useState([])

  const addValueHandler = () => {
    const value = Math.floor(Math.random() * 100 ) + 50;
    setValues([...values, value])
    // =========== another way ===========
    // values.push(value);
    // const a = [...values]
    // setValues(a)
  }
  return (
    <div>
      <p>UseState hook with Object and Array</p>
      <div>
        <label>First name : </label>
        <input 
          type='text'
          value={name.firstName}
          onChange={e => setName({...name, firstName: e.target.value})}
          />
      </div>
      <div>
        <label>Last name : </label>
        <input 
          type='text'
          value={name.lastName}
          onChange={event => setName({...name, lastName: event.target.value})}
          />
      </div>
        <h1>First name: {name.firstName} ----- Last name: {name.lastName}</h1>
          {/* Array */}
        <button onClick={addValueHandler}>Add Value</button>
        
          {values.map((ele, index) =>( 
            <h1 key={index}>{ele}</h1>
          ))}

    </div>
  )
}
