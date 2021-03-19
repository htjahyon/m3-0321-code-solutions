import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
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
    let button;
    if (isClicked) {
      button = <ThanksButton onClick = {this.handleClickOff} />;
    } else {
      button = <ClickMeButton onClick = {this.handleClickOn} />;
    }
    return (
      <div>
        <Clicking isClicked={isClicked} />
        {button}
      </div>
    );
  }
}

function Greeting(props) {
  return <h1>Hello There!</h1>;
}

function Clicking(props) {
  return <Greeting />;
}

function ClickMeButton(props) {
  return (
    <button onClick={props.onClick}>
      Click Me!
    </button>
  );
}

function ThanksButton(props) {
  return (
    <button onClick={props.onClick}>
      Thanks!
    </button>
  );
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
