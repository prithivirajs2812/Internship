const List = () => {
  const courses = ["react", "Springboot", "java"];

  const code = `const List = () => {
  const courses = ["react", "Springboot", "java"];

  return (
    <div>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;`;

  return (
    <div className="output">
      <pre>
        <code>{code}</code>
      </pre>
      <h2>Output:</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
