import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      fellowship: "",
    };
  }

  componentDidMount() {
    axios
      .get(`https://the-one-api.dev/v2/book/5cf5805fb53e011a64671582/chapter`)
      .then((res) => {
        this.setState({ fellowship: res.data });
      });
  }

  render() {
    let chapters = [];
    {
      for (let key in this.state.fellowship.docs) {
        chapters.push(this.state.fellowship.docs[key].chapterName);
      }
    }

    return (
      <div className="App">
        <h1>Chapters of The Fellowship of the Ring</h1>
        {chapters.map((chapter, i) => (
          <h2 key={i}>{chapter}</h2>
        ))}
      </div>
    );
  }
}

export default App;
