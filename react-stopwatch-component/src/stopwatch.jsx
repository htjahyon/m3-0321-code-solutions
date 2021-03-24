import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = { start: false };
    this.interval = null;
    this.seconds = 0;
  }

  handleStart() {
    const timeDisplay = document.querySelector('.time');
    this.interval = setInterval(() => {
      timeDisplay.textContent = this.seconds;
      this.seconds++;
    }, 1000);
    this.setState({ start: true });
  }

  handleStop() {
    clearInterval(this.interval);
    this.setState({ start: false });
  }

  handleReset() {
    this.handleStop();
    this.seconds = 0;
    const timeDisplay = document.querySelector('.time');
    timeDisplay.textContent = this.seconds;
  }

  render() {
    const start = this.state.start;
    let symbol;
    const circleElement = document.querySelector('.circle');
    if (start) {
      symbol = <Stop onClick={this.handleStop} />;
      circleElement.removeEventListener('click', this.handleReset);
    } else {
      symbol = <Start onClick={this.handleStart} />;
      circleElement.addEventListener('click', this.handleReset);
    }

    return (
      <div>
        {symbol}
      </div>
    );
  }
}

function Start(props) {
  return (
    <div className="start" onClick={props.onClick}></div>
  );
}

function Stop(props) {
  return (
    <div className="stop" onClick={props.onClick}>
      <div className="rectangle"></div>
      <div className="rectangle"></div>
    </div>
  );
}

export default StopWatch;
