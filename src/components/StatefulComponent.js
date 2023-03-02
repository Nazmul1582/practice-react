import { Component } from "react";

export default class StatefulComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Md. Nazmul Hasan",
    };
  }
  render() {
    return (
      <div>
        <p>from StatefulComponent or Class Component</p>
        <h1>I am {this.state.name}</h1>
      </div>
    );
  }
}
