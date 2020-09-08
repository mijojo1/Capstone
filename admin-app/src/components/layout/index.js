import React from "react";
import Header from "../header";
import { Container } from "react-bootstrap";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <div></div>
    </>
  );
};
export default Layout;
