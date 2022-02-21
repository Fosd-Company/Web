import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { HomeLayout, MasterLayout } from "./layout";
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
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route path="/*" element={<MasterLayout />}>
          <Route path="about" element={<AboutPage />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="updates" element={<UpdatesPage />} />
          <Route path="error" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="error" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { App };
