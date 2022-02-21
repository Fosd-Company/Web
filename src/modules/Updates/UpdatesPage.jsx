import { Update } from "./components";

const updates = [
  {
    title: "Version: Alpha 2.1",
    features: [
      {
        title: "Optimización de rendimiento",
        changes: [
          "Se ha mejorado el rendimiento de la aplicación al salir de la cámara y cargar nuevamente el menú de navegación",
        ],
      },
    ],
  },
  {
    title: "Versión: Alpha 2.0",
    description: "Mejorando las características de la aplicación",
    features: [
      {
        title: "Experiencia de Usuario",
        changes: [
          "Nuevo Modelo: Tren a vapor",
          "Se agregaron títulos para hacer intuitiva la navegación",
        ],
      },
      {
        title: "Redes Sociales",
        changes: [
          "Se agregó redirección a las redes sociales de la empresa",
          "Se agregó redirección a la página web de la empresa",
        ],
      },
      {
        title: "Otros",
        changes: [
          "Se han modificado los créditos",
          "Se actualizó el logo de la aplicación",
        ],
      },
    ],
  },
  {
    title: "Versión: Alpha 1.0",
    description:
      "Versión inicial realizada en el Hackathon Nicaragua 2021 para la categoria aficionado",
    features: [
      {
        title: "Interfaz gráfica",
        changes: ["Menú de navegación", "Página de créditos"],
      },
      {
        title: "Funcionalidad",
        changes: [
          "Carga de modelos 3D",
          "Enlazamientos de imágenes con los modelos 3D",
        ],
      },
    ],
  },
];

const UpdatesPage = () => {
  return (
    <div className="page-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">{updates.map(Update)}</div>
        </div>
      </div>
    </div>
  );
};

export { UpdatesPage };
