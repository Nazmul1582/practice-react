import React, { Component } from 'react';
class Counting extends Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    handler = (value) => {
        this.setState((prevState) => ({
            count: prevState.count + value
        }));
    }
    render(){
        return(
            <div>
                {
                    this.props.render(this.state.count, this.handler)
                }
            </div>
        )
    }
}
export default Counting;