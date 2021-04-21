import React, { Component } from "react";

class NewTask extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleInputChange(value) {
    this.setState({
      inputValue: value,
    });
  }

  handleButtonClick() {
    this.props.add(this.state.inputValue);
    this.setState({ inputValue: "" });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.inputValue}
          placeholder="Enter new Task"
          onChange={(e) => this.handleInputChange(e.target.value)}
        ></input>
        <button onClick={this.handleButtonClick}>Add</button>
      </div>
    );
  }
}

export default NewTask;
