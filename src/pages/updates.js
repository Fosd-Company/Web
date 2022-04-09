import { Update } from "../components";
import updates from "../../aredu.version.json";

const UpdatesPage = () => {
  return (
    <div className="page-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {updates.map((update) => (
              <Update {...update} key={`update-${update.title}`}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatesPage;
