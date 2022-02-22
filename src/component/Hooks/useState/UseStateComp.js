import React, { useState } from 'react'

export default function UseStateComp() {
  const [count, setCount] = useState(0);
  const [ name, setName ] = useState('Name')

  const updateHandler = () => {
    setName('Next Topper');
    setCount(5);
  }
  return (
    <div>
      <h1> {name} --- {count}</h1>
      <button onClick={updateHandler}>Change</button>
    </div>
  )
}
