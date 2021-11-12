import React,{ Component } from 'react';
import FunctionalComp from './FunctionalComp';
import NormalComp from './NormalComp';
import PureComp from './PureComp';
class MainComp extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Next',
            age: 10
        }
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     if(JSON.stringify(nextState) !== JSON.stringify(this.state)){
    //         return true
    //     }
    //     else return false
        
    // }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "Topper",
                age: 10
            })
        }, 2000);
    }

    render(){
        console.log('from Main Component');
        return (
            <div>
                <h1>Main Component</h1>
                <PureComp name ={this.state.name} age={this.state.age} />
                <NormalComp name={this.state.name} age={this.state.age} />
                <FunctionalComp name={this.state.name} age={this.state.age} />
            </div>
        )
    }
}

export default MainComp;