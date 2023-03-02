import React from "react";

function FunctionalComponent(props) {
  console.log("from FunctionalComponent", props);
  return (
    <div>
      <p>Props in Functional Component</p>
      <h1>Name: {props.myself.name}</h1>
      <h2>Profession: {props.myself.profession}</h2>
    </div>
  );
}

export default FunctionalComponent;
