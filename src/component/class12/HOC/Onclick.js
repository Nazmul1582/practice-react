import React, { Component } from 'react';
import WithCounter from './WithCounter';
class Onclick extends Component{
    render(){
        const { count, handler, age, name} = this.props
        return (
            <div>
                <h4>Onclick Component - {name} - Age : {age} </h4>
                <button onClick={handler}>Clicked {count} Times </button>
            </div>
        )
    }
}
export default WithCounter(Onclick, 5);