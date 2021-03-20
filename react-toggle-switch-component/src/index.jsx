import React from 'react';
import ReactDOM from 'react-dom';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOn = this.handleClickOn.bind(this);
    this.handleClickOff = this.handleClickOff.bind(this);
    this.state = { isClicked: false };
  }

  handleClickOn() {
    this.setState({ isClicked: true });
  }

  handleClickOff() {
    this.setState({ isClicked: false });
  }

  render() {
    const isClicked = this.state.isClicked;
    let toggle;
    if (isClicked) {
      toggle = <ContainerOn onClick={this.handleClickOff} />;
    } else {
      toggle = <ContainerOff onClick={this.handleClickOn} />;
    }
    return (
      <div>
        {toggle}
      </div>
    );
  }
}

function ContainerOff(props) {
  return (
    <div className="containerOff" onClick={props.onClick}>
      <div className="ovalOff">
        <div className="circleOff"></div>
      </div>
      <div className="text">
        <h1>Off</h1>
      </div>
    </div>
  );
}

function ContainerOn(props) {
  return (
    <div className="containerOn" onClick={props.onClick}>
      <div className="ovalOn">
        <div className="circleOn"></div>
      </div>
      <div className="text">
        <h1>On</h1>
      </div>
    </div>
  );
}

ReactDOM.render(
  <ToggleButton />,
  document.querySelector('#root')
);
