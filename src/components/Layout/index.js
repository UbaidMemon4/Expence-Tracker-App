import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
const Layout = () => {
  const user = false;
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
export default Layout;
