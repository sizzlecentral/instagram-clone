import React, { Component } from 'react';
import './App.css';

class Comment extends Component {
  render() {
    return (
      <div>
        <p><strong>Commenter</strong> {this.props.addComment}</p>
      </div>
    )
  }
}

export default Comment
