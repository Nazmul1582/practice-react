import React, { Component } from 'react';
import axios from 'axios';

export default class GetPerson extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      persons: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/admin/view-all-teacher')
    .then(res => {
      this.setState({
        persons: res.data.teacher
      })
    }).catch(err => console.log(err));
  }
  
  render() {
    const {persons} = this.state;
    return (
      <div>
        <h1>All Persons</h1>
        {
          !!persons.length ? 
          <div>
            {
              persons.map(ele => (
                <div key={ele._id}>
                  <h1>Name : {ele.name}</h1>
                  <h4>Username : {ele.username} </h4>
                  <h4>Age : {ele.age} </h4>
                  <h4>Phone : {ele.phone} </h4>
                  <h4>Email : {ele.email} </h4>
                  <h3>==============================================</h3>
                </div>
              ))
            }
          </div>
          :
          <h1>Lodding ....................</h1>
        }
      </div>
    )
  }
}
