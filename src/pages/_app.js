import "../style/bootstrap.css";
import "../style/maicons.css";
import "../style/mobster.css";
import "../vendor/animate/animate.css";
import { MasterLayout } from "../layout";

function MyApp({ Component, pageProps }) {
  return (
    <MasterLayout>
      <Component {...pageProps} />;
    </MasterLayout>
  );
}

export default MyApp;
