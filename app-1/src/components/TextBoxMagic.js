import React, { Component } from "react";

class TextBoxMagic extends Component {
  constructor() {
    super();

    this.state = {
      content: "",
    };
  }

  handleChange(e) {
    this.setState({ content: e.target.value });
  }

  render() {
    return (
      <div>
        <input onChange={(e) => this.handleChange(e)}></input>
        <br></br>
        <br></br>
        <span>{this.state.content}</span>
      </div>
    );
  }
}

export default TextBoxMagic;
