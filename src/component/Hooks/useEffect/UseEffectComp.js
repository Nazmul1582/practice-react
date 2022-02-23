import React, { useState, useEffect } from 'react'
import Coordinate from './Coordinate';

export default function UseEffectComp() {
  const [ count, setCount ] = useState(0);
  const [name, setName] = useState('');
  const [show, setShow] = useState(true);
  
  useEffect(() => {
    console.log('component Did mount');
  }, [count]) // conditionally updated
  
  // useEffect(() => {
  //   console.log('component Did mount');
  // }, []) // stop componentDidUpdate

  console.log('from UseEffectComp');
  return (
    <div>
      <div>
        <input
          type="text" 
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <h1>Name : {name}</h1>
      </div>
      <h1>Count - {count}</h1>
      <button onClick={() => setCount(count + 5)}>Click</button>

      <button onClick={() => setShow(!show)}>Toggle</button>
      { show && <Coordinate />}

    </div>
  )
}
