import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
