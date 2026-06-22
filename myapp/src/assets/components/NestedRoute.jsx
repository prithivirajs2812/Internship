const NestedRoute = () => {
  const code = `App.jsx
<Route path="/routetypes" element={<Routetype />}>
    <Route path="nested" element={<NestedRoute />} />
    <Route path="child" element={<ChildRoute />} />
</Route>
        
Routetype.jsx
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
};

export default Routetype;
 `;

  return (
    <div>
      <pre>
        <code>{code}</code>
      </pre>
      <h1>Output</h1>
      <h2>Nested Route</h2>
      <p>This is a nested route component.</p>
    </div>
  );
};

export default NestedRoute;
