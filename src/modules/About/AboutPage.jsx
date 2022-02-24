const AboutPage = () => (
  <div className="page-section pt-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card-page">
            <h5 className="fg-primary">Historia</h5>
            <hr />
            <p>
              Joven equipo de desarrollo en aplicaciones de realidad aumentada
              que nace a partir de una sugerencia de uno de nuestros docentes
              sobre el cómo mejorar la educación principalmente para niños y
              jóvenes en su etapa de aprendizaje todo ello de mano de la
              integración tecnológica creando un enlace entre el sistema
              educativo con nuevas metodologías a implementar en su enseñanza.
            </p>
            <p>
              De igual manera la realidad aumentada es una tecnología en auge
              debido a sus múltiples aplicaciones. Se puede extrapolar a campos
              tan variados como entretenimiento,publicidad,educación,
              arquitectura,diseño de interiores y muchas áreas más, las
              posibilidades son realmente infinitas, nuestro equipo está
              dispuesto a explorarlas siendo capaz de ofrecer soluciones para
              cada necesidad.
            </p>
            {/* Video */}
            <div className="text-center py-5">
              <embed
                className="embed-video"
                src="https://www.youtube.com/embed/Ru1N1Z4DgeM"
              />
            </div>
            <p>
              Posteriormente se forma Nic-ARTeam como un equipo oficialmente
              inscrito a la plataforma tecnológica más importante del país, el
              Hackathon Nicaragua, pasando por cada una de sus fases de proceso
              creativo, clasificación y preparación hasta lograr destacar como
              segundo lugar en su categoría de aficionados siendo su primera
              experiencia en la plataforma.
            </p>
            <p>
              Nic-ARTeam es una muestra de que a partir de una simple idea se
              puede formar un proyecto real aportando soluciones informáticas y
              fomentando el emprendimiento entre los jóvenes. Actualmente se
              encuentra conformado por cuatro estudiantes de ingeniería en
              computación de la Universidad Nacional de Ingeniería.
            </p>
          </div>
          <div className="card-page mt-3">
            <h5 className="fg-primary">Misión</h5>
            <hr />
            <p>
              Ofrecer a la población nicaragüense de nuevas e interactivas
              herramientas y medios digitales basados en realidad aumentada que
              suplan sus necesidades de manera satisfactoria.
            </p>
          </div>
          <div className="card-page mt-3">
            <h5 className="fg-primary">Visión</h5>
            <hr />
            <p>
              Ser líderes vanguardistas en creación, implementación y colocación
              de material de Realidad aumentada en la vida cotidiana, sentar
              relaciones con instituciones educativas para proyectos de AR con
              fines educativos, obtener socios estratégicos en el ámbito laboral
              y la industria del entretenimiento para contar con cadenas de
              creación y canales de distribución formidables.
            </p>
          </div>
          <div className="card-page mt-3">
            <h5 className="fg-primary">
              Valores y características de nuestro equipo
            </h5>
            <hr />
            <ol>
              <li>Calidad</li>
              <li>Puntualidad</li>
              <li>Pasión</li>
              <li>Competitividad</li>
              <li>Trabajo en equipo</li>
              <li>Orientación a las necesidades del cliente</li>
              <li>Responsabilidad social y educativa</li>
              <li>Resolución de problemas sociales</li>
              <li>Aporte de soluciones creativas</li>
            </ol>
          </div>
          <div className="card-page mt-3">
            <h5 className="fg-primary">Equipo</h5>
            <hr />
            <div className="row justify-content-center">
              <div className="col-lg-3 py-3">
                <div className="team-item">
                  <div className="team-avatar">
                    <img
                      src="../assets/img/person/gabriel.png"
                      width={60}
                      alt=""
                    />
                  </div>
                  <h5 className="team-name">Gabriel Ortiz</h5>
                  <span className="fg-gray fs-small">Developer</span>
                </div>
              </div>
              <div className="col-lg-3 py-3">
                <div className="team-item">
                  <div className="team-avatar">
                    <img
                      src="../assets/img/person/ricardo.png"
                      width={60}
                      alt=""
                    />
                  </div>
                  <h5 className="team-name">Ricardo Montenegro</h5>
                  <span className="fg-gray fs-small">
                    Chief Executive Officer
                  </span>
                </div>
              </div>
              <div className="col-lg-3 py-3">
                <div className="team-item">
                  <div className="team-avatar">
                    <img
                      src="../assets/img/person/adil.png"
                      width={60}
                      alt=""
                    />
                  </div>
                  <h5 className="team-name">Adilson Montenegro</h5>
                  <span className="fg-gray fs-small">
                    Chief Executive Officer
                  </span>
                </div>
              </div>
              <div className="col-lg-3 py-3">
                <div className="team-item">
                  <div className="team-avatar">
                    <img
                      src="../assets/img/person/john.png"
                      width={60}
                      alt=""
                    />
                  </div>
                  <h5 className="team-name">Jhon Torres</h5>
                  <span className="fg-gray fs-small">UI/UX Designer</span>
                </div>
              </div>
            </div>
            <div className="card-page mt-3">
              <h5 className="fg-primary">Partners</h5>
              <hr />
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 justify-content-center align-items-center mt-5">
                <div className="p-3">
                  <div className="img-place client-img">
                    <img src="../assets/img/clients/logo-uni.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { AboutPage };
