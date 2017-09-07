import React from 'react';

const post = {
  image: 'https://unsplash.it/500',
  title: "Amazing photo",
  author: "Bob",
  body: "No filter!",
  comments: [
    "First!",
    "Great post!",
    "hire him!"
  ]
}

const Home = () => (

  <div id="body">

    <div id="post-card">
      <h4>{post.author}</h4>
      <img src={post.image} alt=''/>
      <p><strong>{post.author}</strong> {post.body}</p>
      <hr/>
      <p>{post.comments[0]}</p>
      <p>{post.comments[1]}</p>
      <p>{post.comments[2]}</p>
    </div>

  </div>
)

export default Home;
