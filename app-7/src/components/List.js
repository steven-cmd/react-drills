import React, { Component } from "react";
import Todo from "./Todo";

class List extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.array.map((element, i) => (
          <Todo key={i} value={element}></Todo>
        ))}
      </div>
    );
  }
}

export default List;
