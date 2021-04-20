import React, { Component } from "react";

class Todo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.list.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
    );
  }
}

export default Todo;
