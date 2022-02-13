import axios from 'axios';
import React, { Component } from 'react';

export default class Admit extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: "",
      username: "",
      age: "",
      phone: "",
      email: "",
      password: ""
    }
  }
  
    changeHandler = (event) => {
      this.setState({
        [event.target.name] : event.target.value
      })
    }
  
  admitHandler = (event) => {
    event.preventDefault();

    axios.post('http://localhost:5000/admin/admit-teacher', this.state)
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    const { name, username, age, phone, email, password } = this.state;
    return (
      <div>
        <h1>Admit the person</h1>
        <form>
          <div>
            <label>Name : </label>
            <input type='text' name='name' value={name} onChange={this.changeHandler} />
          </div>
          <div>
            <label>Username : </label>
            <input type='text' name='username' value={username} onChange={this.changeHandler} />
          </div>
          <div>
            <label>Age : </label>
            <input type='number' name='age' value={age} onChange={this.changeHandler} />
          </div>
          <div>
            <label>Phone : </label>
            <input type='number' name='phone' value={phone} onChange={this.changeHandler} />
          </div>
          <div>
            <label>Email : </label>
            <input type='text' name='email' value={email} onChange={this.changeHandler} />
          </div>
          <div>
            <label>Password : </label>
            <input type='text' name='password' value={password} onChange={this.changeHandler} />
          </div>
          <button onClick={this.admitHandler}>Admit</button>
        </form>        
      </div>
    )
  }
}
