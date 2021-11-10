import React, {Component} from 'react';

class UpdatingComp extends Component{
    constructor(){
        super();
        this.state = ({
            name : "It's Mounting Phase now"
        })
        console.log('from constructor');
    }
    changeHandler = () => {
        this.setState({
            name: "It's Updating Phase of LifeCycle"
        })
    }

    static getDerivedStateFromProps(props, state){
        console.log('from getDerivedStateFromProps');
        return 0;
    }

    getSnapshotBeforeUpdate(){
        console.log('from getSnapshotBeforeUpdate');
        return 0;
    }
    componentDidUpdate(){
        console.log('from componentDidUpdate');
    }

    render(){
        console.log('from render');
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeHandler}>Change</button>
            </div>
        )
    }
}

export default UpdatingComp;