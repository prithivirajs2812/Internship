import { useState } from "react";

const State = () => {
  const code = `import { useState } from "react"

const State = () => {

    const [action, setAction] = useState("Notepad")

    function changeAction() {
        setAction(prompt("Enter your action"))
    }
  return (
    <>
    <h1>I am working on {action}</h1>
    <button onClick={changeAction}>Change</button>
    </>
  )
}

export default State`;
  const [action, setAction] = useState("Notepad");

  function changeAction() {
    setAction(prompt("Enter your action"));
  }
  return (
    <div className="output">
      <pre>
        <code>{code}</code>
      </pre>
      <h2>Output:</h2>
      <h1>I am working on {action}</h1>
      <button onClick={changeAction}>Change</button>
    </div>
  );
};

export default State;
