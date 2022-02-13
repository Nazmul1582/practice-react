import React, { Component } from 'react';
import axios from 'axios'

export default class GetPosts extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      allPosts : []
    }
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(res => {
      this.setState({
        allPosts : res.data
      })
    })
    .catch(err => console.log(err));
  }
  
  render() {
    const { allPosts } = this.state;
    return (
      <div>
        <h1>All Posts</h1>
        {
          !!allPosts.length ?
          <div>
            {
              allPosts.map(ele => (
                <div key={ele.id}>
                  <h1>Title: {ele.title}</h1>
                </div>
              ))
            }
          </div>
          :
          <div>
            <h1>Loading ................</h1>
          </div>
        }
      </div>
    )
  }
}
