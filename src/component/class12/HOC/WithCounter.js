import React, { Component } from 'react';
const WithCounter = (WrappedComponent, value) => {
    class NewComp extends Component{
        constructor(){
            super();
            this.state = {
                count : 0
            }
        }
        incrementHandler = () =>{
            this.setState((prevState) => {
                return { count : prevState.count + value };
            })
        }
        render(){
            return <WrappedComponent 
                name="Next Topper"
                count={this.state.count} 
                handler={this.incrementHandler}
                {... this.props} />
        }
    }
    return NewComp;
}

export default WithCounter;