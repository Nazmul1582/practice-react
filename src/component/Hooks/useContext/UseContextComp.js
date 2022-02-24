import React, { useContext } from 'react'
import ThemeContext from './context/ThemeContext';
import UserContext from './context/UserContext';

export default function UseContextComp() {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div>
      <p>From useContext Component</p>
      <h1>User is {user.name} & age is {user.age} </h1>
      <h1>Theme is {theme}</h1>
    </div>
  )
}
