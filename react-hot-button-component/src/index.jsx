import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { backgroundColor: 'gray' };
    this.clicks = 0;
  }

  handleClick() {
    this.clicks++;
    const clicks = this.clicks;
    this.setState({ backgroundColor: 'gray' });
    if (clicks >= 18) { this.setState({ backgroundColor: 'white' }); } else if (clicks >= 15) { this.setState({ backgroundColor: 'yellow' }); } else if (clicks >= 12) { this.setState({ backgroundColor: 'rgb(255,212,128)' }); } else if (clicks >= 9) { this.setState({ backgroundColor: 'pink' }); } else if (clicks >= 6) { this.setState({ backgroundColor: 'rgb(102,0,204)' }); } else if (clicks >= 3) { this.setState({ backgroundColor: 'purple' }); }
  }

  render() {
    return (
      <button onClick={this.handleClick} style={this.state}>Hot Button</button>
    );
  }
}

ReactDOM.render(
  <HotButton />,
  document.querySelector('#root')
);
