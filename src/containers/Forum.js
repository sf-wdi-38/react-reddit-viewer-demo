import React, { Component } from 'react';

class Thread extends Component {
  render() {
    return (<p>{this.props.title}</p>);
  }
}

class Forum extends Component {
  constructor(props) {
    super(props)
    this.state = {
      threads: ["Damn Wish!", "I was walking..."]
    }
  }
  render() {
    return (
        <div>
          <h1>The { this.props.params.forum_name } Subreddit</h1>
          { this.state.threads.map((title) => <Thread title={title} />) }
        </div>

    );
  }
}

export default Forum;
