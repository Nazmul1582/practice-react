import { Component } from "react";

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button className="btn" onClick={this.handleIncrement}>
          Increase
        </button>
        <button className="btn" onClick={this.handleDecrement}>
          Decrease
        </button>
      </div>
    );
  }
}
