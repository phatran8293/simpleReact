import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onAdd(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Add
        </button>
        &nbsp;
        <button
          onClick={() => this.props.onMinus(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Remove
        </button>
        &nbsp;
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
