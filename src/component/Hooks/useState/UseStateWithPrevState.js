import React, { useState } from 'react'

export default function UseStateWithPrevState() {
  const [count, setCount] = useState(0)
  const incrementTenTimes = () => {
    for(let i = 0; i< 10; i++){
      // setCount(count + 1);
      setCount(prevState => prevState + 1)
    }
  }
  return (
    <div>
      <h1>Count : {count} </h1>
      <button onClick={() => {setCount(count + 1)}}>increment</button>
      <button onClick={() => {setCount(count - 1)}}>decrement</button>
      <button onClick={() => {setCount(0)}}>reset</button>
      <button onClick={incrementTenTimes}>incrementTenTimes</button>
    </div>
  )
}
