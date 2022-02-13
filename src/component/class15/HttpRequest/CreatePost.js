import axios from 'axios';
import React, { Component } from 'react';

export default class CreatePost extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      id: 101,
      title: "Custom post",
      body: "This is a custom post by Muhammad Nazmul Hasan",
      name: "Md Nazmul Hasan",
      userType: 'admin',
      age : 24,
      mobile: "123456890",
      address: "Cumilla"
    }
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault();
    
    const { id, title, body, name, userType, age, mobile, address } = this.state;
    const bio = {
      age, 
      mobile, 
      address
    }
    const data = {id, title, body, name, userType, bio}
    
    axios.post('http://jsonplaceholder.typicode.com/posts', data)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));
  }

  render(){
    return(
      <div>
        <h1>All Posts</h1>
        <button onClick={this.submitHandler}>Submit</button>
      </div>
    )
  }
}
