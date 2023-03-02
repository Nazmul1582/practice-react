import React from "react";

const ReusableComponent = ({ name, age, dist }) => {
  // const {name, age, dist} = props;
  return (
    <div>
      <h1>{name}'s information</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Home District: {dist}</p>
    </div>
  );
};

export default ReusableComponent;
