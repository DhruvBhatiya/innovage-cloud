import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="">Hooks</Link>
          <ul>
            <li>
              <Link to="">useState</Link>
            </li>
            <li>
              <Link to="">useEffect</Link>
            </li>
            <li>
              <Link to="/callback">useCallback</Link>
            </li>
            <li>
              <Link to="">useMemo</Link>
            </li>
            <li>
              <Link to="/useRef">useRef</Link>
            </li>
            <li>
              <Link to="">useContext</Link>
            </li>
            <li>
              <Link to="">useReducer</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
