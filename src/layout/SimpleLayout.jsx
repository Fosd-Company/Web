import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";

const SimpleLayout = () => (
  <Fragment>
    <Navbar />
    <Outlet />
    <Footer />
  </Fragment>
);

export { SimpleLayout };
