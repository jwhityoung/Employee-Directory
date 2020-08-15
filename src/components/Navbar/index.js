//Navbar

import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#77BFC7"}}>
      <Link className="navbar-brand" to="/">
        Employee Directory
      </Link>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item mr-auto">
            <Link
              to="/discover"
              className={
                window.location.pathname === "/discover"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
            Employees
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;