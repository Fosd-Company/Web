import { NavLink } from "react-router-dom";

const ErrorPage = () => (
  <div className="bg-light">
    <div
      className="page-hero-section bg-image hero-mini"
      style={{ backgroundImage: "url(../assets/img/hero_mini_error.svg)" }}
    >
      <div className="hero-caption">
        <div className="container fg-white h-100">
          <div className="row justify-content-center align-items-center text-center h-100">
            <div className="col-lg-6">
              <h3 className="mb-3 fw-medium">Error 404</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-dark justify-content-center bg-transparent">
                  <li className="breadcrumb-item active" aria-current="page">
                    <NavLink to="/">Inicio</NavLink>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="page-section">
      <div className="container">
        <div className="row justify-content-center"></div>
      </div>
    </div>
  </div>
);

export { ErrorPage };
