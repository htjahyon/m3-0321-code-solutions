import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      start: false,
      seconds: 0
    };
    this.interval = null;
  }

  handleStart() {
    this.interval = setInterval(() => {
      const seconds = this.state.seconds + 1;
      this.setState({ seconds: seconds });
    }, 1000);
    this.setState({ start: true });
  }

  handleStop() {
    clearInterval(this.interval);
    this.setState({ start: false });
  }

  handleReset() {
    this.handleStop();
    this.setState({ seconds: 0 });
  }

  render() {
    const start = this.state.start;
    const seconds = this.state.seconds;
    let stopwatch;
    if (start) {
      stopwatch = <div className="container">
                    <div className="circle">
                      <div className="time">{seconds}</div>
                    </div>
                    <div className="stop" onClick={this.handleStop}>
                      <div className="rectangle"></div>
                      <div className="rectangle"></div>
                    </div>
                  </div>;
    } else {
      stopwatch = <div className="container">
                      <div className="circle" onClick={this.handleReset}>
                        <div className="time">{seconds}</div>
                      </div>
                        <div className="start" onClick={this.handleStart}></div>
                    </div>;
    }
    return (
      <div>
        {stopwatch}
      </div>
    );
  }
}

export default StopWatch;
