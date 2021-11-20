import React, { Component } from 'react';
class HoverCounter extends Component{
    render(){
        const { handler, count } = this.props
        return(
            <div>
                <h4>Hover Counter Component</h4>
                <button onMouseEnter={() => handler(5)} > Hovered {count} times</button>
            </div>
        )
    }
}
export default HoverCounter;