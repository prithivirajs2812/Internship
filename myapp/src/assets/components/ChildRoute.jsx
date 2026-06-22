const ChildRoute = () => {
  const code = `Routetype.jsx
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Routetype = () => {
  return (
    <div className="output">
      <ul>
        <li>
          <Link to="nested">Nested Route</Link>
        </li>
        <li>
          <Link to="child">Child Route</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};`;

  return (
    <div>
      <pre>
        <code>{code}</code>
      </pre>
      <h1>Output:</h1>
      <h1>Child Route</h1>
      <p>This is a child route component.</p>
    </div>
  );
};

export default ChildRoute;
