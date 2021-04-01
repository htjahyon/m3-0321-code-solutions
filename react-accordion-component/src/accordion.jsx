import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      openId: null
    };
    this.topics = props.topics;
  }

  handleClick(topicId) {
    if (this.state.openId === topicId) { this.setState({ openId: null }); } else { this.setState({ openId: topicId }); }
  }

  render() {
    return (this.topics.map(topic => (
      <div key={topic.id}>
        <div className="button" onClick={() => this.handleClick(topic.id)}>{topic.title}</div>
        <div className={`content ${topic.id === this.state.openId ? 'show' : 'hidden'}`}>
          {topic.content}
        </div>
      </div>
    ))
    );
  }
}

export default Accordion;
