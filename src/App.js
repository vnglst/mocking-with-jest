import React, { Component } from "react";
import "./App.css";
import { getUser } from "./api/github";

const renderLine = (user, key) => <li key={key}><b>{key}</b>: {user[key]}</li>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

  componentDidMount() {
    getUser("vnglst").then(data => {
      this.setState({ user: data.entity });
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <ul style={{ listStyle: "none" }}>
          {Object.keys(user).map(key => renderLine(user, key))}
        </ul>
      </div>
    );
  }
}

export default App;
