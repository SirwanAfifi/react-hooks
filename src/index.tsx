import * as React from "react";
import { render } from "react-dom";
import { ReactHook } from "./ReactHook";
import { Example } from "./Example1";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Example />
    <ReactHook />
  </div>
);

render(<App />, document.getElementById("root"));
