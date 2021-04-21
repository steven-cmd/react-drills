import React, { Component } from "react";
import "./App.css";
import NewTask from "./components/NewTask";
import List from "./components/List";

class App extends Component {
  constructor() {
    super();

    this.state = {
      taskArray: [],
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(newTask) {
    this.setState({
      taskArray: [...this.state.taskArray, newTask],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.handleAddTask}></NewTask>
        <List array={this.state.taskArray}></List>
      </div>
    );
  }
}

export default App;
