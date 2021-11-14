import React, { Component } from 'react';
import InputComp from './InputComp';
class RefsComp extends Component{
    constructor(){
        super();
        this.state = {

        }
        this.compRefs = React.createRef()
    }

    clickHandler = () => {
        this.compRefs.current.focusHandler();
    }

    render(){
        return (
            <div>
                <InputComp ref={this.compRefs} />
                <button onClick={this.clickHandler} >Focus</button>
            </div>
        )
    }
}

export default RefsComp;