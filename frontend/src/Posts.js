import React, { Component } from 'react'
// import config from './config'
// import { error } from 'util';

class Posts extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      urltitle: '',
      body: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};
    console.log(data)
    fetch('http://localhost:4000/api/v1/posts', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      method: 'POST',
    });
  }
  
  
  render() {
    // console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Title</label>
       
        <input id="title" value={this.state.title} onChange={this.handleInputChange} name="title" type="text" />

        <label htmlFor="urltitle">URL</label>
        <input id="urltitle" value={this.state.urltitle} onChange={this.handleInputChange} name="urltitle" type="text" />

        <label htmlFor="postbody">Content</label>

        <textarea id="postbody" value={this.state.body} onChange={this.handleInputChange} name="body" type="textarea" />

        <button>Publish now</button>
      </form>
    );
  }
}

export default Posts