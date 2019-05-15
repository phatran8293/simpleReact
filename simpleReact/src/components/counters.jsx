import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
      { id: 5, value: 5 }
    ]
  };
  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-secondary btn-sm">
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
            onMinus={this.handleMinus}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }

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
}

export default Counters;
