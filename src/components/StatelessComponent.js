import React from "react";

function StatelessComponent() {
  const myself = {
    name: "Md. Nazmul Hasan",
  };
  return (
    <div>
      <p>from StatelessComponent or Functional Component</p>
      <h1>I am {myself.name}</h1>
    </div>
  );
}

export default StatelessComponent;
