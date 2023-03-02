import React from "react";
import ChildComponent from "./components/ChildComponent";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <div className="wrapper">
      <h1 className="title">Parent Component & Child Component</h1>
      <div className="center">
        <ParentComponent>
          <ChildComponent />
        </ParentComponent>
      </div>
    </div>
  );
}

export default App;
