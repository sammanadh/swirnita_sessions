import React from "react";
import Increment from "./components/Increment";

export default class App extends React.Component {
  state = {
    incrementCount: 0,
  };

  constructor(props) {
    super(props);
    this.changeCount = this.changeCount.bind(this);
  }

  changeCount() {
    this.setState((prev) => ({
      incrementCount: prev.incrementCount + 1,
    }));
  }

  render() {
    return (
      <div>
        <Increment
          count={this.state.incrementCount}
          changeCount={this.changeCount}
        />
      </div>
    );
  }
}
