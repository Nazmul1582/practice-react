import React, {Component} from 'react';
import UnmountingChild from './UnmountingChild';
class UnmountingComp extends Component{
    constructor(){
        super();
        this.state = {
            show : true
        }
        console.log('from constructor');
    }

    showHidetHandler = () => {
        this.setState({
            show: !this.state.show
        })
    }
    render(){
        console.log('from render');
        return(
            <div>            
                {
                    this.state.show ? <UnmountingChild/> : <h1>Unmounting Phase</h1>
                }
                <button onClick={this.showHidetHandler}>Toggle</button>            
            </div>
        )
    }
}
export default UnmountingComp;