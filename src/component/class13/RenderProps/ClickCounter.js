import React, { Component } from 'react';
class ClickCounter extends Component{
    render(){
        const { count, handler} = this.props
        return(
            <div>
                <h4>Click Counter Component</h4>
                <button onClick={() => handler(10)}>Clicked {count} times</button>
            </div>
        )
    }
}
export default ClickCounter;