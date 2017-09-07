import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {

    constructor (props) {
    super()
    this.state = {
      commentArray: props.commentList,
      newItem: ''
    }
  }

  clearList (e) {
    this.setState({
      commentArray: []
    })
  }

  newItemChange (e) {
    this.setState({
      newItem: e.target.value
    });
  }

  addComment (e) {
    // prevent the button from triggering the form's default submit event.
    e.preventDefault();
    const comments = this.state.commentArray;
    comments.push(this.state.newItem);
    this.setState({commentArray: comments, newItem: ''});
  }

  render() {
      let userComments = this.state.commentArray.map( (item, index) => (
        <Comment addComment={item} key={index} />
      ))

    return (
      <div>
          {userComments}
        <form>
          <input type="text"
           placeholder="Add a comment"
           onChange={(e) => this.newItemChange(e)}
           value={this.state.newItem}
          />
          <button onClick={(e) => this.addComment(e)}>Submit</button>
        </form>
        <div id="clear-comments">
          <button onClick={(e) => this.clearList(e)}>Clear all comments</button>
        </div>
      </div>
    );
  }
}

export default CommentList;
