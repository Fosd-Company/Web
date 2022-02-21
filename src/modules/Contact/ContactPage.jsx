const redirectToSocialNetwork = ({ target }) => {
    const { id } = target;
  switch (id) {
    case "facebook":
      return window.open("https://www.facebook.com/Nic-ARTeam-104434778692752/", "_blank");
    case "twitter":
      return window.open("https://twitter.com/Nic_ARTeam?s=09", "_blank");
    case "instagram":
      return window.open("https://www.instagram.com/invites/contact/?i=90dpr5zv8p8w&utm_content=msqqklw", "_blank");
  }
};

const ContactPage = () => (
  
    <div className="page-section" id="#">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 my-3 wow fadeInUp">
            <div className="card-page">
              <div className="row row-beam-md">
                <div className="col-md-4 text-center py-3 py-md-2">
                  <i className="mai-location-outline h3" />
                  <p className="fg-primary fw-medium fs-vlarge">Localización</p>
                  <p className="mb-0">Próximamente</p>
                </div>
                <div className="col-md-4 text-center py-3 py-md-2">
                  <i className="mai-call-outline h3" />
                  <p className="fg-primary fw-medium fs-vlarge">Llámanos</p>
                  <p className="mb-1">+505 5768 9250</p>
                  <p className="mb-0">+505 8385 4816</p>
                </div>
                <div className="col-md-4 text-center py-3 py-md-2">
                  <i className="mai-mail-open-outline h3" />
                  <p className="fg-primary fw-medium fs-vlarge">Correo</p>
                  <p className="mb-1">fosd@workmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-10 my-3 wow fadeInUp">
            <div className="row row-beam-md">
              <button
                className="btn btn-light col-md-4 text-center py-3 py-md-2"
                id="facebook"
                onClick={redirectToSocialNetwork}
              >
                <i className="mai-logo-facebook h3" />
                <p className="fg-primary fw-medium fs-vlarge">Facebook</p>
              </button>
              <button
                className="btn btn-light col-md-4 text-center py-3 py-md-2"
                id="twitter"
                onClick={redirectToSocialNetwork}
              >
                <i className="mai-logo-twitter h3" />
                <p className="fg-primary fw-medium fs-vlarge">Twitter</p>
              </button>
              <button
                className="btn btn-light col-md-4 text-center py-3 py-md-2"
                id="instagram"
                onClick={redirectToSocialNetwork}
              >
                <i className="mai-logo-instagram h3" />
                <p className="fg-primary fw-medium fs-vlarge">Instagram</p>
              </button>
            </div>
          </div>
          <div className="col-lg-10 my-3 wow fadeInUp">
            <div className="card-page">
              <h3 className="fw-normal">Póngase en contacto con nosotros</h3>
              <form method="POST" className="mt-3">
                <div className="form-group">
                  <label htmlFor="name" className="fw-medium fg-grey">
                    Nombre y Apellido
                  </label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="fw-medium fg-grey">
                    Correo
                  </label>
                  <input type="text" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="fw-medium fg-grey">
                    Teléfono(opcional)
                  </label>
                  <input type="number" className="form-control" id="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="fw-medium fg-grey">
                    Mensaje
                  </label>
                  <textarea
                    rows={6}
                    className="form-control"
                    id="message"
                    defaultValue={""}
                  />
                </div>
                <p>*Su información nunca será compartida con terceros.</p>
                <div className="form-group mt-4">
                  <button type="submit" className="btn btn-primary">
                    Enviar mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

);

export { ContactPage };
