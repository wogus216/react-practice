import React from "react";
import { Component } from "react";

class RefSample extends Component {
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.input}></input>
      </div>
    );
  }
}

export default RefSample;
