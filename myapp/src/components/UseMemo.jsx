import { useState } from "react";
import UseMemoChild from "./UseMemoChild";

const UseMemo = () => {
  const code = `UseMemoChild.jsx
    import { memo } from "react";
    
    const UseMemoChild = memo(() => {
      return <div>UseMemoChild</div>;
    });
    
    export default UseMemoChild;`;
  const [count, setCount] = useState(0);
  return (
    <div className="output">
      <pre>
        <code>{code}</code>
      </pre>
      <h1>Output:</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <UseMemoChild />
    </div>
  );
};

export default UseMemo;
