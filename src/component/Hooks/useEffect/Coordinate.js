import React, { useEffect, useState } from 'react'

export default function Coordinate() {
  const [x, setX] = useState('')
  const [y, setY] = useState('')

  const mousePosition = (event) => {
    setX(event.clientX);
    setY(event.clientY)
    console.log('hello')
  }

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('mousemove', mousePosition)

    return() => {
      console.log('componentWillUnmount');
      window.removeEventListener('mousemove', mousePosition);
    }
  }, [])

  return (
    <div>
      <h1> X : {x} and Y : {y}</h1>
    </div>
  )
}
