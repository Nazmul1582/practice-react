import React, { Component } from "react"

class InputRefsComp extends Component {
    constructor(){
        super();
        this.nameInput = React.createRef();
    }
    
    componentDidMount () {
        this.nameInput.current.focus();
    }

    showTextHandler = (event) => {
        alert(this.nameInput.current.value);
    }
    render(){
        return (
            <div>
                <input type='text' placeholder="Enter Your Name" ref={this.nameInput} />
                <button onClick={this.showTextHandler}>Show Text</button>
            </div>
        )
    }
}
export default InputRefsComp;