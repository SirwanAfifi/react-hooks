import * as React from "react";
import { State } from "react-powerplug";

const Example = () => {
  return (
    <State
      initial={{
        count: 0
      }}
    >
      {({ state, setState }) => (
        <div>
          <p>You clicked {state.count} times</p>
          <button onClick={() => setState({ count: state.count + 1 })}>
            Click me
          </button>
        </div>
      )}
    </State>
  );
};

export { Example };
