import React, { Component } from 'react'
import UseContextComp from '../UseContextComp'
import ComponentA from './ComponentA'
import { ThemeProvider } from './ThemeContext'
import { UserProvider } from './UserContext'

export default class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name : 'admin',
      age : 24,
      theme : 'redius'
    }
  }
  render() {
    return (
      <div>
        <h1>Context API</h1>
        <UserProvider value={{name: this.state.name, age: this.state.age}}>
          <ThemeProvider value={this.state.theme}>
            <ComponentA />
            <UseContextComp />
          </ThemeProvider>
          
        </UserProvider>
      </div>
    )
  }
}
