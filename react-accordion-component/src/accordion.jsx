import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.clickHTML = this.clickHTML.bind(this);
    this.clickCSS = this.clickCSS.bind(this);
    this.clickJS = this.clickJS.bind(this);
    this.state = {
      html: false,
      css: false,
      js: false
    };
    this.objectArray = [
      {
        text: 'Hypertext Markup Language (HTML) is the standard markup language' +
              ' for creating web pages and web application. With Cascading Style Sheets' +
              ' (CSS) and JavaScript, it forms a triad of cornerstone technologies for the' +
              ' World Wide Web.'
      },
      {
        text: 'Cascading Style Sheets (CSS) is a style sheet language used for describing' +
              ' the presentation of a document written in a markup language like HTML. CSS' +
              ' is a cornerstone technology of the World Wide Web alongside HTML and JavaScript.'
      },
      {
        text: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language' +
              ' that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax,' +
              ' dynamic typing, prototype-based objec-orientation, and first-class functions.'
      }
    ];
  }

  clickHTML() {
    const html = !this.state.html;
    this.setState({ html: html });
  }

  clickCSS() {
    const css = !this.state.css;
    this.setState({ css: css });
  }

  clickJS() {
    const js = !this.state.js;
    this.setState({ js: js });
  }

  render() {
    const htmlButton = <div className="html-button" onClick={this.clickHTML}>Hypertext Markup Language</div>;
    const cssButton = <div className="css-button" onClick={this.clickCSS}>Cascading Style Sheets</div>;
    const jsButton = <div className="js-button" onClick={this.clickJS}>JavaScript</div>;
    let htmlText = null;
    let cssText = null;
    let jsText = null;

    if (this.state.html) { htmlText = <div className="html-text">{this.objectArray[0].text}</div>; }
    if (this.state.css) { cssText = <div className="css-text">{this.objectArray[1].text}</div>; }
    if (this.state.js) { jsText = <div className="js-text">{this.objectArray[2].text}</div>; }

    return (<div className="container">
                  <>{htmlButton}</>
                    <>{htmlText}</>
                    <>{cssButton}</>
                    <>{cssText}</>
                    <>{jsButton}</>
                    <>{jsText}</>
                </div>
    );
  }
}

export default Accordion;
