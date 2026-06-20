import { useRef } from "react";

const Useref = () => {
  const code = `
import { useRef } from "react";

const Useref = () => {
  const inputref = useRef();

  const focusInput = () => {
    inputref.current.focus();
  };

  return (
    <div>
      <input ref={inputref} type="text" />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
};

export default Useref;
`;

  const inputref = useRef();

  const focusInput = () => {
    inputref.current.focus();
  };

  return (
    <>
   
    <div className="output">

      <pre>
        <code>{code}</code>
      </pre>

      <h2>Output:</h2>

      <input ref={inputref} type="text" />
      <button onClick={focusInput}>Focus</button>
    </div>
    </>
  );
};

export default Useref;