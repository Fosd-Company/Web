import { Fragment, useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Footer, Navbar } from "./components";

const breadcrumbs = {
  "contact-us": { title: "Medios de Contacto", name: "Contáctanos" },
  "updates": { title: "Novedades", name: "Actualizaciones" },
  "about": { title : "¿Quiénes somos?", name: "Acerca de" },
  "" : { title: "", name: "" }
}

const MasterLayout = () => {
  const location = useLocation();
  const [breadcrump, setBreadcrump] = useState();

  useEffect(() => {
    setBreadcrump(breadcrumbs[location.pathname.split("/")[1]]);
  }, [location]);

  return (
    <Fragment>
      <Navbar />
      <main className="bg-light">
        <div
          className="page-hero-section bg-image hero-mini"
          style={{ backgroundImage: "url(../assets/img/hero_mini.svg)" }}
        >
          <div className="hero-caption">
            <div className="container fg-white h-100">
              <div className="row justify-content-center align-items-center text-center h-100">
                <div className="col-lg-6">
                  <h3 className="mb-4 fw-medium">{breadcrump?.title}</h3>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-dark justify-content-center bg-transparent">
                      <li className="breadcrumb-item">
                        <NavLink to="/">
                          <a>Inicio</a>
                        </NavLink>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {breadcrump?.name}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export { MasterLayout };
