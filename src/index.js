import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45 PM"
        commentText="I love this!"
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:45 AM"
        commentText="When did you do this?"
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 5:55 PM"
        commentText="We need to chat."
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
