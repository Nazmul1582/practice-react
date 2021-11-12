import React, {Component} from 'react';
class UpdatingComp extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
        console.log('from constructor');
    }
    static getDerivedStateFromProps(props, state){
        console.log('from getDerivedStateFromProps');
        return 0;
    }
    shouldComponentUpdate(){
        console.log('form shouldComponentUpdate');
        return true  // details in class 10 Pure Component
    }
    getSnapshotBeforeUpdate(){
        console.log('from getSnapshotBeforeUpdate');
        return 0
    }

    componentDidUpdate(){        
        console.log('from componentDidUpdate');
    }

    incrementHandler = () => {
        this.setState((prevState) => ({
            count: prevState.count + 5
        }))
    }
    render(){
        console.log('from render');
        return(
            <div>            
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.incrementHandler}>Increment</button>            
            </div>
        )
    }
}
export default UpdatingComp;