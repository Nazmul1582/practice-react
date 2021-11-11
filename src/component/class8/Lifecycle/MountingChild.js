import React, {Component} from 'react';
class MountingChild extends Component{
    constructor(){
        super();
        this.state = {
            name : 'Next Topper',
        }
        console.log('from child constructor');
    }

    static getDerivedStateFromProps(){
        console.log('from child getDerivedStateFromPorps');
        return 0
    }

    componentDidMount(){
        console.log('from child componentDidMount');
    }

    render(){
        console.log('from child render');
        return(
            <div>
                <h1>{this.state.name} form Mounting Child</h1>
            </div>
        )
    }
}
export default MountingChild;