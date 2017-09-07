import React from 'react';
import CommentList from './CommentList';

const post = {
  image: 'https://unsplash.it/500',
  title: "Amazing photo",
  author: "Bob",
  body: "No filter!",
}

const Home = () => (

  <div id="body">

    <div id="post-card">
      <h4>{post.author}</h4>
      <img src={post.image} alt=''/>
      <p><strong>{post.author}</strong> {post.body}</p>
      <hr/>
      <div id="comment-list">

      </div>
    </div>

  </div>
)

export default Home;
