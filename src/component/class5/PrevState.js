import React, {Component} from 'react';

class PrevState extends Component {
    constructor(){
        super();
        this.state = ({
            count: 0,
            isLoggedIn : true
        })
    }

    incrementHandler = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
    }

    incrementFiveTimesHandler = () => {
        this.incrementHandler()
        this.incrementHandler()
        this.incrementHandler()
        this.incrementHandler()
        this.incrementHandler()
    }

    changeHandler = () => {
        this.setState((prevState) => ({
            isLoggedIn : !prevState.isLoggedIn
        }))
    }

    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick = {this.incrementFiveTimesHandler}>increment</button>
                <br />
                <br />
                <button onClick = {this.changeHandler} >{this.state.isLoggedIn ? 'Logout' : 'Login' }</button>
            </div>
        )
    }
}

export default PrevState;