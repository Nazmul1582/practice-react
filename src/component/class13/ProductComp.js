import React , { Component } from 'react'
class ProductComp extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }
    render(){
        return (
            <div>
                <h1>From Product Component</h1>
                <h1>Product Name is : {this.props.name(true)}</h1>
            </div>
        )
    }
}
export default ProductComp;