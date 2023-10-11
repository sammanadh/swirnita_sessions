import React from "react";

export default class Increment extends React.Component {
  render() {
    return (
      <div>
        <h1>Increment: {this.props.count}</h1>
        <button
          onClick={() => {
            this.props.changeCount(1);
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}
