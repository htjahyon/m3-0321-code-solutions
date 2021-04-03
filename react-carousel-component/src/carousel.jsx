import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.tickTock = this.tickTock.bind(this);
    this.clickNext = this.clickNext.bind(this);
    this.clickPrevious = this.clickPrevious.bind(this);
    this.clickCircle = this.clickCircle.bind(this);
    this.previousButton = '<';
    this.nextButton = '>';
    this.interval = null;
    this.state = {
      index: 0,
      seconds: 0,
      timerStarted: false,
      blackId: 0
    };
  }

  tickTock() {
    this.setState({ timerStarted: true });
    this.interval = setInterval(() => {
      let seconds = this.state.seconds;
      if (seconds === 3) {
        this.clickNext();
        seconds = 0;
        this.setState({ seconds: 0 });
      }
      seconds++;
      this.setState({ seconds: seconds });
    }, 1000);
  }

  clickNext() {
    let index = this.state.index;
    if (index === this.props.pictures.length - 1) {
      this.setState({
        index: 0,
        blackId: 0
      });
    } else {
      index++;
      this.setState({
        index: index,
        blackId: index
      });
    }
    this.setState({ seconds: 0 });
  }

  clickPrevious() {
    let index = this.state.index;
    if (index === 0) {
      this.setState({
        index: this.props.pictures.length - 1,
        blackId: this.props.pictures.length - 1
      });
    } else {
      index--;
      this.setState({
        index: index,
        blackId: index
      });
    }
    this.setState({ seconds: 0 });
  }

  clickCircle(pictureId) {
    this.setState({
      index: pictureId,
      blackId: pictureId
    });
    this.setState({ seconds: 0 });
  }

  render() {
    const circles = this.props.pictures.map(picture => (
      <div key={picture.id}>
        <div className={`circle ${picture.id === this.state.blackId ? 'black' : 'white'}`}
          onClick={() => this.clickCircle(picture.id)}></div>
      </div>));

    if (!this.state.timerStarted) this.tickTock();
    return (
      <div className="container">
        <div className="box">
          <div className="previous" onClick={this.clickPrevious}>{this.previousButton}</div>
          <img className="picture" src={this.props.pictures[this.state.index].url}/>
          <div className="next" onClick={this.clickNext}>{this.nextButton}</div>
        </div>
        <div className="circles">{circles}</div>
      </div>
    );
  }
}

export default Carousel;
