import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import request from "./request";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

  componentDidMount() {
    request("https://api.github.com/users/vnglst").then(data => {
      this.setState({ user: data.entity });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <img alt={`Avatar ${this.state.user.name}`} src={this.state.user.avatar_url} /> 
        <p>
          {this.state.user.bio}
        </p>
      </div>
    );
  }
}

export default App;
