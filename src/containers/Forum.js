import React, { Component } from 'react';

class Thread extends Component {
  render() {
    return (<p>{this.props.title}</p>);
  }
}

class Forum extends Component {
  render() {
    let threads = ["Damn Wish!", "I was walking..."];

    return (
        <div>
          <h1>The { this.props.params.forum_name } Subreddit</h1>
          { threads.map((title) => <Thread title={title} />) }
        </div>

    );
  }
}

export default Forum;
