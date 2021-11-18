import React, { Component } from 'react';
import WithCounter from './WithCounter';
class MouseOver extends Component{
    render(){
        const { count, color, handler, name } = this.props
        return (
            <div>
                <h4>MouseOver Component - {name} - Color : {color}</h4>
                <button onMouseOver={handler}> Hovered {count} Times </button>
            </div>
        )
    }
}
export default WithCounter(MouseOver, 10);