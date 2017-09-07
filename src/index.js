import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CommentList from './CommentList';
import registerServiceWorker from './registerServiceWorker';


let comments = []

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();

ReactDOM.render(
  <CommentList commentList={comments} />,
  document.getElementById('comment-list')
);
