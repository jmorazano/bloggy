import React, { Component } from 'react'
import config from './config'
import { error } from 'util';

const Post = ({ post, id }) => (
  <div className="post-info">
  </div>
)

class Posts extends Component {
  state = {
    newPost: '',
    posts: '',
    error: '',
    isLoading: false
  }

  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts () {
    this.setState({ isLoading: true })
    const uri = config.apiHost
    // HTTP GET Request to our backend api and load into state
    fetch(`${uri}/api/v1/posts`)
      .then((res) => res.json())
      .then(posts => this.setState({ isLoading: false, posts: posts.message }))
      .catch((error) => this.setState({ error: error.message }))
  }

  addPost (event) {
    event.preventDefault() // Prevent form from reloading page
    const { newPost, posts } = this.state

    if(newPost) {
      this.setState({
        newPost: '',
        posts: posts.concat({ description: newPost, done: false })
      })
    }
  }

  render() {
    let { posts, newPost, isLoading, error } = this.state

    return (
      <div>
        <h1 className="">Pooooooosts</h1>
        <h1 className="">{error}</h1>
        <h1 className="">{posts}</h1>
        <button onClick={this.fetchPosts.bind(this)}>TEST FETCH API</button>
      </div>
    );
  }
}

export default Posts
