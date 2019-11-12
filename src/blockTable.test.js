import React from "react";
import ReactDOM from "react-dom";
import BlockTable from "./components/blockTable";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BlockTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});
