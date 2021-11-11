import React, {Component} from 'react';
class UnmountingChild extends Component{
    constructor(){
        super();
        console.log('from child constructor');
    }
    componentWillUnmount(){
        console.log('child componentWillUnmount');
    }
    
    render(){
        console.log('from child render');
        return(
            <div>            
                <h1>Hello From Unmounting Child Component</h1>           
            </div>
        )
    }
}
export default UnmountingChild;