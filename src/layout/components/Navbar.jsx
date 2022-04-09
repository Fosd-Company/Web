import Link from "next/link";
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

        <div
          className={`${isCollapsed && "collapse"} navbar-collapse`}
          id="navbarToggler"
        >
          <ul className="navbar-nav ml-auto mt-3 mt-lg-0">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Inicio</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/updates">
                <a className="nav-link">Actualizaciones</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact-us">
                <a className="nav-link">Contáctenos</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">
                  Acerca de
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
