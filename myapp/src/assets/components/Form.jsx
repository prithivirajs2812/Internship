import { useState } from "react";

const Form = () => {
  const code = `import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Form User-{name}</h2>
    </>
  );
};

export default Form;`;

  const [name, setName] = useState("");
  return (
    <div className="output">
      <pre>
        <code>{code}</code>
      </pre>
      <h2>Output:</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Form User-{name}</h2>
    </div>
  );
};

export default Form;
