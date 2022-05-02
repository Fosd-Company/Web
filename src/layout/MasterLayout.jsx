import { Fragment, useEffect, useState } from "react";
import { Footer, Navbar } from "./components";
import Link from "next/link";
import { useRouter } from "next/router";

const breadcrumbs = {
  "/contact-us": { title: "Medios de Contacto", name: "Contáctanos" },
  "/updates": { title: "Novedades", name: "Actualizaciones" },
  "/about": { title: "¿Quiénes somos?", name: "Acerca de" },
  "/revista": { title: "Revista", name: "Revista" },
};

const MasterLayout = ({ children }) => {
  const [breadcrump, setBreadcrump] = useState();
  const router = useRouter();

  useEffect(() => {
    router.pathname !== "/" && setBreadcrump(breadcrumbs[router.pathname]);
  }, [router]);

  return (
    <Fragment>
      <Navbar />
      <main className="bg-light">
        {router.pathname !== "/" && (
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
                          <Link href="/">Inicio</Link>
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
        )}
        {children}
      </main>
      <Footer />
    </Fragment>
  );
};

export { MasterLayout };
