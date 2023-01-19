import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleIncrement = (id) => {
    const counters = [...this.state.counters];
    const index = counters.findIndex((counter) => counter.id === id);
    ++counters[index].value;
    this.setState({ counters });
  };
  handleDecrement = (id) => {
    const counters = [...this.state.counters];
    const index = counters.findIndex((counter) => counter.id === id);
    --counters[index].value;
    this.setState({ counters });
  };
  handleDelete = (id) => {
    const counters = this.state.counters.filter((counter) => counter.id !== id);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = [...this.state.counters];
    counters.forEach((counter) => (counter.value = 0));
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <Navbar
          length={
            this.state.counters.filter((counter) => counter.value !== 0).length
          }
        />
        <div className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </div>
      </div>
    );
  }
}

export default App;
