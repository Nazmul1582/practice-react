import React, { Component } from 'react';
class InputComp extends Component{
    constructor(){
        super();
        this.inputRefs = React.createRef();
    }

    focusHandler = () => {
        this.inputRefs.current.focus();
    }

    render(){
        return (
            <div>
                <input type='text' ref={this.inputRefs} />
            </div>
        )
    }
}

export default InputComp;