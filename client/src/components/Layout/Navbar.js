import React, { useState } from "react";

export default function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [dropdown, setDropDown] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#non">
          Navbar
        </a>
        <button
          className="custom-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#non">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#non">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#non">
                Pricing
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#non"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => setDropDown(!dropdown)}
              >
                Dropdown link
              </a>
              <ul className={`${dropdown ? "" : "dropdown-menu"}`}>
                <li>
                  <a className="dropdown-item" href="#non">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#non">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#non">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
