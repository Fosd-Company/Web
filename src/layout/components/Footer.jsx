import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const redirectToSocialNetwork = ({ target }) => {
  const { id } = target;
  switch (id) {
    case "facebook":
      return window.open(
        "https://www.facebook.com/Nic-ARTeam-104434778692752/",
        "_blank"
      );
    case "twitter":
      return window.open("https://twitter.com/Nic_ARTeam?s=09", "_blank");
    case "instagram":
      return window.open(
        "https://www.instagram.com/invites/contact/?i=90dpr5zv8p8w&utm_content=msqqklw",
        "_blank"
      );
  }
};

const Footer = () => (
  <Fragment>
    <div className="page-footer-section bg-dark fg-white">
      <div className="container">
        <div className="row mb-5 py-3">
          <div className="col-sm-6 col-lg-2 py-3">
            <h5 className="mb-3">Aplicaciones</h5>
            <ul className="menu-link">
              <li>
                <a>AR Education</a>
              </li>
              <li>
                <a className="">AR Entertainment</a>
              </li>
              <li>
                <a className="">AR Bussiness</a>
              </li>
              <li>
                <a className="">MLabs</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-2 py-3">
            <h5 className="mb-3">Compañía</h5>
            <ul className="menu-link">
              <li>
                <NavLink to="about">Acerca de</NavLink>
              </li>
              <li>
                <a className="">Equipo</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4 py-3">
            <h5 className="mb-3">Contacto</h5>
            <ul className="menu-link">
              <li>
                <NavLink to="contact-us">Contáctanos</NavLink>
              </li>
              <li>
                <a className="">+505 5768 925</a>
              </li>
              <li>
                <a className="">fosd@workmail.com</a>
              </li>
              <li>
                <a className="">+505 8385 4816</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4 py-3">
            <h5 className="mb-3">Suscribete</h5>
            <p>Te enviaremos actualizaciones y novedades de la aplicación</p>
            <form method="POST">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Correo electrónico..."
                />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-primary" disabled>
                    <span className="mai-send"></span>
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-3">
              <a
                className="btn btn-fab btn-primary fg-white"
                onClick={redirectToSocialNetwork}
                id="facebook"
              >
                <span className="mai-logo-facebook"></span>
              </a>
              <a
                className="btn btn-fab btn-primary fg-white"
                onClick={redirectToSocialNetwork}
                id="twitter"
              >
                <span className="mai-logo-twitter"></span>
              </a>
              <a
                className="btn btn-fab btn-primary fg-white"
                onClick={redirectToSocialNetwork}
                id="instagram"
              >
                <span className="mai-logo-instagram"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 py-2">
            <img src="assets/favicon-light.png" alt="" width="40" />
            {/* <!-- Please don't remove or modify the credits below --> */}
            <p className="d-inline-block ml-2">
              {new Date().getFullYear()} Copyright &copy; <a className="fg-white fw-medium">Fosd</a>. Todos
              los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
    <script src="assets/js/jquery-3.5.1.min.js"></script>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/owl-carousel/js/owl.carousel.min.js"></script>
    <script src="assets/vendor/wow/wow.min.js"></script>
    <script src="assets/js/mobster.js"></script>
  </Fragment>
);

export { Footer };
