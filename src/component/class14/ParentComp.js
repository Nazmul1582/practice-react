import React, { Component } from 'react';
import { ProductProvider } from '../../Context/ProductContext';
import { UserProvider } from '../../Context/UserContext';
import CompA from './CompA';

export default class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       user : 'Admin',
       id : 101,
       product: "Desktop",
       price: '70k'
    }
  }
  
  render() {
    const { user, id } = this.state
    return (
      <div>
        <h1>I am Parent Component</h1>
        <ProductProvider value={this.state}>
          <UserProvider value={{user: user, id: id}}>
            <CompA />
          </UserProvider>
        </ProductProvider>        
      </div>
    )
  }
}
