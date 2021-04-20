import React, { Component } from "react";

class ListFilterer extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      list: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"],
    };
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <input onChange={(e) => this.handleChange(e)}></input>
        {this.state.list.map(
          (item) => item.includes(this.state.input) && <h2>{item}</h2>
        )}
      </div>
    );
  }
}

export default ListFilterer;
