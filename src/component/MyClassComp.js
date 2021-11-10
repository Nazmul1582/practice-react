import React from 'react';

class MyClassComp extends React.Component {
    constructor(){
        super();
        this.state = {
            name : "Next Topper",
            age : 2
        }

        // this.nameChangeHandler = this.nameChangeHandler.bind(this)
    }
    
    // nameChangeHandler () {
    //     this.setState ({
    //         name : "Mern Stack"
    //     })
    // }
    nameChangeHandler = () => {
        this.setState({
            name: "Tanvir",
            age: "10"
        })
    }

    render(){
        const {name, age} = this.state
        const {name:pName, age:pAge} = this.props
        // console.log(this.props)
        return (
            <div>
                <h1 style = {{color : "coral"}}> All Information </h1>
                {/* <h1>Name : {name} </h1>
                <h1>Age : {age} </h1> */}
                <h1>Name : {pName ? pName : name }</h1>
                <h1>Age : {pAge ? pAge : age} </h1>
                <button onClick = {this.nameChangeHandler}
                // onClick = {this.nameChangeHandler.bind(this)}
                // onClick = {() => this.nameChangeHandler()}
                style = {{background: "#00956b", color: "#fff", padding : "10px 20px", borderRadius: "5px", border : "1px solid #00956b",fontSize: "18px", cursor: "pointer"}}>
                    Change Name
                </button>
            </div>
        )
    }
}

export default MyClassComp;