import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.displayMenu = this.displayMenu.bind(this);
    this.displayIcon = this.displayIcon.bind(this);
    this.state = { menuOn: false };
  }

  displayMenu() {
    this.setState({ menuOn: true });
  }

  displayIcon() {
    this.setState({ menuOn: false });
  }

  render() {
    let click = this.displayMenu;
    let display = <div className="icon" onClick={click}>
                    <div className="rectangle"></div>
                    <div className="rectangle"></div>
                    <div className="rectangle"></div>
                  </div>;
    const menuOn = this.state.menuOn;
    if (menuOn) {
      click = this.displayIcon;
      display = <div className="container">
                  <div className="left">
                    <h1 onClick={click}>Menu</h1>
                    <h3 onClick={click}>About</h3>
                    <h3 onClick={click}>Get Started</h3>
                    <h3 onClick={click}>Sign In</h3>
                  </div>
                    <div className="right" onClick={click}></div>
                </div>;
    }
    return (
      <div>{display}</div>
    );
  }
}

export default AppDrawer;
