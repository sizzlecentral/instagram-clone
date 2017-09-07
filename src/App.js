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

const App = () => (
  <Router>
    <div>

      <div id="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to="/activity">Activity</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/search" component={Search}/>
      <Route path="/explore" component={Explore}/>
      <Route path="/activity" component={Activity}/>
      <Route path="/profile" component={Profile}/>
    </div>
  </Router>
)

export default App;
