import "./Content2Styles.css";

import React, { Component } from "react";

class Content2 extends Component {
  render() {
    return (
      <div className="content-2">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Content2;
