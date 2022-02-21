const HomePage = () => (
  <div>
    <div
      className="page-hero-section bg-image hero-home-2"
      style={{ backgroundImage: "url(../assets/img/bg_hero_2.svg)" }}
    >
      <div className="hero-caption">
        <div className="container fg-white h-100">
          <div className="row align-items-center h-100">
            <div className="col-lg-6 wow fadeInUp">
              <div className="badge badge-soft mb-2">Dev by Fosd</div>
              <h1 className="mb-4 fw-normal">AR Education</h1>
              <p className="mb-4">
                Combinando la lectura con la tecnología, <br />
                aprendiendo con ayuda de la curiosidad.
              </p>
              <a className="btn btn-dark" onClick={() => window.open("https://www.mediafire.com/file/dq2aj8wzcs9xsha/aredu_alpha2_1.apk/file", "_blank")}>
                Versión Alpha 2.1
              </a>
            </div>
            <div className="col-lg-6 d-none d-lg-block wow zoomIn">
              <div className="img-place mobile-preview shadow floating-animate">
                <img src="../assets/img/app_showcase.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
);

export { HomePage };
