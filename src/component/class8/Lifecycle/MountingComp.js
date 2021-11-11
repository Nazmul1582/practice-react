import React, {Component} from 'react';
import MountingChild from './MountingChild';
class MountingComp extends Component{
    constructor(){
        super();
        this.state = {
            name : 'Next Topper',
            lodding: true,
            data: []
        }
        console.log('from constructor');
    }

    static getDerivedStateFromProps(){
        console.log('from getDerivedStateFromPorps');
        return 0
    }

    componentDidMount(){
        let myData = [
            'Red',
            'Blue',
            'Yellow',
            'Green'
        ]
        setTimeout(() => {
            this.setState({
                lodding: false,
                data : myData
            })
        }, 2000)
        console.log('from componentDidMount');
    }

    render(){
        console.log('from render');
        return(
            <div>
                <MountingChild />
                {
                    this.state.lodding ? <h1>Lodding .......</h1> : 
                    this.state.data.map((ele, index) => (
                        <h1 key={index}>{ele}</h1>
                    ))
                }
            
            </div>
        )
    }
}
export default MountingComp;