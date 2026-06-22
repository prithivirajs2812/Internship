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
