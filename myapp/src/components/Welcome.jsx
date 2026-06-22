const Welcome = () => {
  const code = `App.jsx
    <Welcome />
  
welcome.jsx
    const Welcome = () => {
      return (
        <div>Welcome</div>
      )
    }

export default Welcome`;
  return (
    <div className="output">
      <pre>
        <code>{code}</code>
      </pre>
      <h1>Output:</h1>
      <h2>Welcome</h2>
    </div>
  );
};

export default Welcome;
