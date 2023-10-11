import React from "react";

export default class Decrement extends React.Component {
  render() {
    return (
      <div>
        {/* decrement count */}
        <h1>Decrement: {this.props.count}</h1>
        <button
          onClick={() => {
            this.props.changeCount(-1);
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}
