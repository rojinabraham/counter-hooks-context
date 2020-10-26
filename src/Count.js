import React, { Component } from "react";
import { ThemeContext } from "./App";

export default class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.intialCount,
    };
  }
  changeCount = (amount) => {
    this.setState((prev) => ({ count: prev.count + amount }));
  };
  render() {
    return (
      <ThemeContext.Consumer>
        {(style) => (
          <div>
            <button style={style} onClick={() => this.changeCount(-1)}>
              -
            </button>
            <span>{this.state.count}</span>
            <button style={style} onClick={() => this.changeCount(1)}>
              +
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
