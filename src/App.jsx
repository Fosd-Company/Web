import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { SimpleLayout, MasterLayout } from "./layout";
import {
  AboutPage,
  HomePage,
  UpdatesPage,
  ContactPage,
  ErrorPage,
} from "./modules";

const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<SimpleLayout />}>
          <Route index element={<HomePage />} />
          <Route path="error" element={<ErrorPage />} />
        </Route>

        <Route path="/*" element={<MasterLayout />}>
          <Route path="about" element={<AboutPage />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="updates" element={<UpdatesPage />} />
          <Route path="*" element={<Navigate to="error" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { App };
