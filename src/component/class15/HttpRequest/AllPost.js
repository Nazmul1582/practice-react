import React, { Component } from 'react';
import axios from 'axios';

export default class AllPost extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       allPosts : []
    }
  }

  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //   .then(res => {
  //     // console.log(res);
  //     this.setState({
  //       allPosts: res.data
  //     })
  //   })
  //   .catch(error => console.log(error));
  // }

  getPostHandler = async() => {
    const res = await axios.get('http://jsonplaceholder.typicode.com/posts')
    this.setState({
      allPosts : res.data
    })
  }
  
  render() {
    const { allPosts } = this.state;
    return (
      <div>
        <h1>All Posts from "jsonplaceholder.typicode.com" fake api</h1>
        <button onClick={this.getPostHandler}>Show Data</button>
        { 
          !!allPosts.length ?
          <div>
            {
              allPosts.map(ele => (
                <div key={ele.id}>
                  <h1> ID : {ele.id}</h1>
                  <h1>Title: {ele.title}</h1>
                  <h3>===========================</h3>
                </div>
              ))
            }
          </div>
          :
          <h1>Lodding ............</h1>
        }
      </div>
    )
  }
}
