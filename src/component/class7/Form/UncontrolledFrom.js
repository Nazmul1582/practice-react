import React, {Component} from 'react';
class UncontrolledFrom extends Component{
    constructor(props){
        super(props);
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.selectInput = React.createRef();
        this.hobbiesInput = React.createRef();
    }

    submitHandler = (event) => {
        event.preventDefault();

        let name, email, select, hobbies; 
        name = this.nameInput.current.value
        email = this.emailInput.current.value
        select = this.selectInput.current.value
        // hobbies = [this.hobbiesInput.current.value]
        console.log(name, email, select);
    }

    render(){
        return(
            <div>
                <h1>Uncontrolled From</h1>
                <form>
                    <div>
                        <label>Name : </label>
                        <input type="text" name='name' ref={this.nameInput} />
                    </div>
                    <div>
                        <label>Email : </label>
                        <input type="email" name='email' ref={this.emailInput} />
                    </div>
                    <div>
                        <label>Select Country : </label>
                        <select name='country' ref={this.selectInput}>
                             <option value="">Select Your Country</option>
                             <option value="bangladesh">Bangladesh</option>
                             <option value="afganistan">Afganistan</option>
                        </select>
                    </div>
                    {/* <div>
                        <p>Choose your hobbies : </p>
                        <input type="checkbox" name='hobbies' 
                        value='codding'
                        ref={this.hobbiesInput} />
                        <label>Coding</label>

                        <input type="checkbox" name='hobbies' 
                        value="playing"
                        ref={this.hobbiesInput} />
                        <label>Playing</label>

                        <input type="checkbox" name='hobbies' 
                        value='taveling'
                        ref={this.hobbiesInput} />
                        <label>Traveling</label>

                        <input type="checkbox" name='hobbies' 
                        value='reading'
                        ref={this.hobbiesInput} />
                        <label>Reading</label>
                    </div> */}
                    <div>
                        <button onClick={this.submitHandler}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default UncontrolledFrom;