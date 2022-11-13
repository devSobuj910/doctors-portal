import React from "react";
import Banner from "./baner/Banner";
import Cardonfos from "./cardinfo/Cardonfos";
import Care from "./care/Care";
import Apoinment from "./makeapoinment/Apoinment";
import Servics from "./services/Servics";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Cardonfos></Cardonfos>
      <Servics></Servics>
      <Care></Care>
      <Apoinment></Apoinment>
    </div>
  );
};

export default Home;
