import React, { Component } from 'react';
import ProductContext from '../../Context/ProductContext';
import CompC from './CompC';

export default class CompB extends Component {
  render() {
    const { product, price } = this.context
    return (
      <div>
        <h1>Comp B - Product : {product} ----- Price : {price}</h1>
        <CompC />
      </div>
    )
  }
}
CompB.contextType = ProductContext;