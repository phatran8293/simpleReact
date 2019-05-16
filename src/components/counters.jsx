import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, onDelete, onAdd, onMinus, counters } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-secondary btn-sm">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            onDelete={onDelete}
            onAdd={onAdd}
            onMinus={onMinus}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
