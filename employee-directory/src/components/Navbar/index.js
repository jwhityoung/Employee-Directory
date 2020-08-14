//Navbar

import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Employee Directory
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/all"
              className={
                window.location.pathname === "/all"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
            See Employees
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/discover"
              className={
                window.location.pathname === "/discover"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
            Discover
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;