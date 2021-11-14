import React,{ PureComponent } from 'react';
class PureComp extends PureComponent{
    render(){
        console.log("Pure Component");
        return (
            <div>
                <h1>Pure Component - {this.props.name} - {this.props.age}</h1>
            </div>
        )
    }
}

export default PureComp;