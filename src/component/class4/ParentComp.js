import React, {Component} from 'react';
import ChildComp from './ChildComp';

class ParentComp extends Component {
    constructor(){
        super();
        this.state = {
            name : "Abdullah"
        }
        // this.changeNameHandler = this.changeNameHandler.bind(this)
    }
    changeNameHandler = (n) => {
        this.setState({
            name : n
        })
    }

    render(){
        const {name} = this.state
        return (
            <div>
                <h1>Are you {name}?</h1>
                {/* <button 
                onClick = {this.changeNameHandler} 
                style = {{background: "coral", color: "#fff", padding : "10px 20px", borderRadius: "5px", border : "1px solid coral",fontSize: "18px", cursor: "pointer"}}>Change Name</button> */}
                <ChildComp changeNameHandler = {this.changeNameHandler} />
            </div>
        )
    }
}

export default ParentComp;