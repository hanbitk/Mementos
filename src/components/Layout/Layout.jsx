import React from "react";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" &&(
        <Header />
      )}
      {children}
    </>
  );
}

export default Layout;
