import React, {Component} from 'react';
class ControlledFrom extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : "",
            email: "",
            city: '',
        }
    }
    inputHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <h1>Register Form</h1>
                <form>
                    <div>
                        <label>Enter your full name</label>
                        <input type ="text" name="name" 
                        value={this.state.name}
                        onChange={this.inputHandler}/>
                    </div>
                    <div>
                        <label>Enter your Email</label>
                        <input type ="email" name="email" 
                        value={this.state.email}
                        onChange={this.inputHandler}/>
                    </div>
                    <div>
                        <label>Select your City</label>
                        <select name="city" 
                        value={this.state.city}
                        onChange={this.inputHandler}>
                            <option value = "dhaka">Dhaka</option>
                            <option value = "cumilla">Cumilla</option>
                            <option value = "munsigonj">Munsigonj</option>
                        </select>
                    </div>
                    <div>
                        <button onClick={this.submitHandler}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ControlledFrom;