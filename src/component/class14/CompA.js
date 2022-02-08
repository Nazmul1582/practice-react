import React, { Component } from 'react';
import ProductContext from '../../Context/ProductContext';
import CompB from './CompB';

export default class CompA extends Component {

  static contextType = ProductContext;

  render() {
    return (
      <div>
        <h1>Comp A - Product : {this.context.product}</h1>
        <CompB />
      </div>
    )
  }
}
