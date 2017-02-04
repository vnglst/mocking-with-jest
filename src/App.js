import React, { Component } from "react";
import "./App.css";
import request from "./request";

const renderLine = (user, key) => <li key={key}><b>{key}</b>: {user[key]}</li>

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
    const { user } = this.state 
    return (
      <div className="App">
        <div className="App-header">
          <img src={user.avatar_url} className="App-logo" alt={`Avatar ${user.name}`} />
          <h2>{user.name}</h2>
        </div>
          <ul style={{listStyle: 'none'}}>
            { Object.keys(user).map(key => renderLine(user, key)) }
          </ul>
      </div>
    );
  }
}

export default App;
