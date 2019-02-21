import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    persons: ["Bakyt", "Aijan", "Aftandil"],
    hidden: false,
    age: "0",
    temp: "36"
  };
  togglePersons = () => {
    this.setState({
      hidden: !this.state.hidden
    });
  };
  ageChange = event => {
    this.setState({ age: event.target.value });
  };
  tempChange = event => {
    this.setState({ temp: event.target.value });
  };
  render() {
    let persons = null;
    let content = <h3>Normal</h3>;
    let temp = <h3>36</h3>;
    let tempText = <h3>Normal</h3>;

    if (this.state.temp >= 37 && this.state.temp < 39) {
      tempText = <h2>You have temp</h2>;
    } else if (this.state.temp >= 40) {
      tempText = <h1>You have dangaroud temp</h1>;
    }
    if (this.state.temp <= 30 && this.state.temp > 20) {
      tempText = <h2>Cold</h2>;
    } else if (this.state.temp <= 29 && this.state.temp > -1) {
      tempText = <h2>Died</h2>;
    }
    if (this.state.age >= 18) {
      tempText = <h1>Hello world!</h1>;
    }
    if (!this.state.hidden) {
      persons = this.state.persons.join(",");
    }
    return (
      <div className="App">
        <button onClick={this.togglePersons}>Toggle</button>
        {persons}
        <input type="number" value={this.state.age} onChange={this.ageChange} />
        <h3>{content}</h3>
        0
        <input
          type="range"
          min="0"
          max="50"
          value={this.state.temp}
          onChange={this.tempChange}
        />
        50
        <h3>{this.state.temp}</h3>
        {tempText}
      </div>
    );
  }
}

export default App;
