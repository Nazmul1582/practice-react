import React, { Component } from 'react'
import { ThemeConsumer } from './ThemeContext'
import { UserConsumer } from './UserContext'

export default class ComponentA extends Component {
  render() {
    return (
      <div>
        <p>From ComponentA</p>
        <UserConsumer>
          {
            (user) => (
              <ThemeConsumer>
                {
                  (theme) => (
                    <h1>user: {user.name} --------- Theme : {theme}</h1>
                  )
                }
              </ThemeConsumer>
            )
          }
        </UserConsumer>
      </div>
    )
  }
}
