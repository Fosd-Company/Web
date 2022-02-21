import { Fragment } from "react";

const Feature = ({ title, changes }) => {
  return (
    <Fragment>
      <h5>{title}</h5>
      <ul className="theme-list">
        {changes.map((content, index) => (
          <li  className="list-item" key={index}>{content}</li>
        ))}
      </ul>
    </Fragment>
  );
};

const Update = ({ title, description, features, note }) => {
  return (
    <div className="card-page mt-3">
      <h3 className="mb-3">{title}</h3>
      <p>{description}</p>
      {features.map(Feature)}
      <p>{note}</p>
    </div>
  );
};

export { Update };
