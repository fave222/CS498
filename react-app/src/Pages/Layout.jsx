import React from "react";
import {Outlet} from "react-router-dom";

import MyNavbar from "../Components/navbar";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;