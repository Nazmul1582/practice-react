import React, { Component } from 'react';
import { ProductConsumer } from '../../Context/ProductContext';
import { UserConsumer } from '../../Context/UserContext';

export default class CompC extends Component {
  render() {
    return (
      <div>
        <p>I am from component C</p>
        <ProductConsumer>
          {
            (productInfo) => {
              return(
                <div>
                  <UserConsumer>
                    {
                      (userInfo) => {
                        return(
                          <div>
                            <h1>User : {userInfo.user} ----- Id : {userInfo.id}</h1>
                            <h1>Product : {productInfo.product} ----- Price : {productInfo.price}</h1>
                          </div>
                        )
                      }
                    }
                  </UserConsumer>
                </div>
              )
            }
          }
        </ProductConsumer>
      </div>
    )
  }
}
