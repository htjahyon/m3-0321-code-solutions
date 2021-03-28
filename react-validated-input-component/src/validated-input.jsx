import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      password: '',
      filled: false,
      longEnough: false
    };
  }

  handleChange(event) {
    const length = event.target.value.length;
    this.setState({ password: event.target.value });
    if (length >= 8) {
      this.setState({
        filled: true,
        longEnough: true
      });
    } else if (length < 8 && length > 0) {
      this.setState({
        filled: true,
        longEnough: false
      });
    } else {
      this.setState({
        filled: false,
        longEnough: false
      });
    }
  }

  render() {
    const filled = this.state.filled;
    const longEnough = this.state.longEnough;
    let symbol = <span className="redx">X</span>;
    let message = <p className="empty">A password is required.</p>;
    if (longEnough) {
      symbol = <span className="tick-mark"></span>;
      message = null;
    } else if (filled && !longEnough) { message = <p className="short">Your password is too short.</p>; }

    return (
      <form>
        <label>Password</label>
          <div className="box">
            <input type="text" value={this.state.password} onChange={this.handleChange} />
            <div>{symbol}</div>
          </div>
          <div>{message}</div>
      </form>
    );
  }
}

export default ValidatedInput;
