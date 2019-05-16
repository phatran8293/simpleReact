import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const remainCounters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: remainCounters });
  };

  handleReset = () => {
    const counterAfterReset = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counterAfterReset });
  };

  handleAdd = counter => {
    const counterAdd = [...this.state.counters];
    const index = counterAdd.indexOf(counter);
    counterAdd[index] = { ...counter };
    counterAdd[index].value++;
    this.setState({ counters: counterAdd });
  };

  handleMinus = counter => {
    const counterMinus = [...this.state.counters];
    const index = counterMinus.indexOf(counter);
    counterMinus[index] = { ...counter };
    counterMinus[index].value--;
    this.setState({ counters: counterMinus });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
            onMinus={this.handleMinus}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
