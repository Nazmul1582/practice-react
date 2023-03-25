import { Component } from "react";

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button className="btn" onClick={this.handleIncrement}>
          Increase
        </button>
      </div>
    );
  }
}
