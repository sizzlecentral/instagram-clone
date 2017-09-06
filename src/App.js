import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home.js';
import Search from './Search.js';
import Explore from './Explore.js';
import Activity from './Activity.js';
import Profile from './Profile.js';
import './App.css';

const post = {
  image: 'http://api.giphy.com/v1/gifs/search?q=instagram&api_key=c6b5b3635f374dcea88defbc15a45d79&limit=1',
  title: "Amazing photo",
  author: "Bob",
  body: "No filter!",
  comments: [
    "First!",
    "Great post!",
    "hire him!"
  ]
}

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/activity">Activity</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>

      <hr/>

      <Route path="/" component={
        () => (<Home image={post.image}
                  title={post.title}
                  Author={post.author}
                  body={post.body}
                  comments={post.comments} />
        )}/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/explore" component={Explore}/>
      <Route exact path="/activity" component={Activity}/>
      <Route exact path="/profile" component={Profile}/>
    </div>
  </Router>
)

export default App;
