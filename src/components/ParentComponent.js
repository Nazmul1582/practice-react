import React from "react";

export default function ParentComponent(props) {
  return (
    <div style={{ marginBottom: "100px" }}>
      <h1>I am a Parent Component</h1>
      {props.children}
    </div>
  );
}
