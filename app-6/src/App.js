import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      task: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      task: e.target.value,
    });
  }

  handleClick() {
    this.setState({
      list: [...this.state.list, this.state.task],
      task: "",
    });
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input
          value={this.state.input}
          placeholder="Enter new task"
          onChange={(e) => this.handleChange(e)}
        ></input>
        <button onClick={this.handleClick}>Add</button>
        <Todo list={this.state.list} />
      </div>
    );
  }
}

export default App;
