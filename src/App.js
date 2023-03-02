import React from "react";
import UsingJsx from "./components/UsingJsx";
import WithoutJsx from "./components/WithoutJsx";

function App() {
  return (
    <div className="wrapper">
      <h1 className="title">JSX (JavaScript XML) Syntaxt</h1>
      <div className="center">
        <UsingJsx />
        <WithoutJsx />
      </div>
    </div>
  );
}

export default App;
