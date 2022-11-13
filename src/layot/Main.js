import React from "react";
import Nav from "../shared/navbar/Nav";
import Foooter from "../shared/footer/Foooter";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Foooter></Foooter>
    </div>
  );
};

export default Main;
