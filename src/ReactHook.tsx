import { useState } from "react";
import * as React from "react";

export interface ReactHookProps {}

const ReactHook = (props: ReactHookProps) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello From ReactHook Component</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export { ReactHook };
