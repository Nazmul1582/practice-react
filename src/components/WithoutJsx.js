import React from "react";

function WithoutJsx() {
  //   const singleEl = React.createElement(
  //     "h1",
  //     { className: "center" },
  //     "Hello World!"
  //   );

  const multipleEl = React.createElement("div", { className: "center" }, [
    React.createElement("h4", { key: 1 }, "without JSX"),
    React.createElement("h1", { key: 2 }, "Hello World!"),
  ]);

  console.log(multipleEl);

  return multipleEl;
}

export default WithoutJsx;
