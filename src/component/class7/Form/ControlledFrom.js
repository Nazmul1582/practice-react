import React, {Component} from 'react';
class ControlledFrom extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : "",
            email: "",
            country: "",
            hobbies: []
        }
    }
    changeHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    checkboxChangeHandler = (event) => {
        if(event.target.checked){
            this.setState({
                hobbies : [...this.state.hobbies, event.target.value]
            })
        }else{
            this.setState({
                hobbies : this.state.hobbies.filter(ele => (
                    ele !== event.target.value
                ))
            })
        }
    }
    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <h1>Controlled From</h1>
                <form>
                    <div>
                        <label>Name : </label>
                        <input type="text" name='name' 
                        value={this.state.name}
                        onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label>Email : </label>
                        <input type="email" name='email' 
                        value={this.state.email}
                        onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label>Select Country : </label>
                        <select name='country' value={this.state.country}
                         onChange={this.changeHandler}>
                             <option value="">Select Your Country</option>
                             <option value="bangladesh">Bangladesh</option>
                             <option value="afganistan">Afganistan</option>
                        </select>
                    </div>
                    <div>
                        <p>Choose your hobbies : </p>
                        <input type="checkbox" name='hobbies' 
                        value='codding'
                        onChange={this.checkboxChangeHandler} />
                        <label>Coding</label>

                        <input type="checkbox" name='hobbies' 
                        value="playing"
                        onChange={this.checkboxChangeHandler} />
                        <label>Playing</label>

                        <input type="checkbox" name='hobbies' 
                        value='taveling'
                        onChange={this.checkboxChangeHandler} />
                        <label>Traveling</label>

                        <input type="checkbox" name='hobbies' 
                        value='reading'
                        onChange={this.checkboxChangeHandler} />
                        <label>Reading</label>
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