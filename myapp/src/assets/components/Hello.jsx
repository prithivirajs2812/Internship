const Hello = () => {
  const code = `const Hello = () => {
  const name = "prithivi";

  return <div>Hello,I am {name}!</div>;
};

export default Hello;`;

  const name = "prithivi";

  return (
    <div className="output">
      <pre>
        <code>{code}</code>
      </pre>
      <h2>Output:</h2>
      <div>Hello,I am {name}!</div>
    </div>
  );
};

export default Hello;
