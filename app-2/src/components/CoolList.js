import React, { Component } from "react";

class CoolList extends Component {
  constructor() {
    super();
    this.state = {
      list: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"],
    };
  }

  render() {
    return (
      <div>
        {this.state.list.map((item) => (
          <h2>{item}</h2>
        ))}
      </div>
    );
  }
}

export default CoolList;
