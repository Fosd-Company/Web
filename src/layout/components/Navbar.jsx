import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-floating">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="assets/favicon-light.png" alt="" width="40" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isCollapsed && "collapse"} navbar-collapse`} id="navbarToggler">
          <ul className="navbar-nav ml-auto mt-3 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/updates">
                Actualizaciones
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact-us">
                Contáctenos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                Acerca de
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
