import React, { Component } from 'react'

class Test extends Component {
  state = {
    title: '',
    body: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => 
    this.setState({
      title: data.title,
      body: data.body
     })
  );
  }
  // componentWillMount() {
  //   console.log('Will mount soon...')
  // }
  // componentDidUpdate() {
  //   console.log('did update...')
  // }
  // componentWillUpdate() {
  //   console.log('Will update soon...')
  // }
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('component willrecieve props')
  // }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return {
  //     test: 'xxxholic'
  //   }
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate...')
  // }

  render() {
    const { title, body } = this.state;
    return (
      
      <div>
        <h1 className="bg-success">{title}</h1>
        <p className="text-warning bg-dark">{body}</p>
      </div>
    )
  }
}

export default Test;