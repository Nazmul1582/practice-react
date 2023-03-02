import { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Md. Nazmul Hasan",
    };
  }
  render() {
    console.log("from ClassComponent", this.props);

    return (
      <div>
        <p>Props in ClassComponent</p>
        <h1>name: {this.state.name}</h1>
        <h2>Profession: {this.props.profession}</h2>
      </div>
    );
  }
}
