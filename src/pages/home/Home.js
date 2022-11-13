import React from "react";
import Banner from "./baner/Banner";
import Cardonfos from "./cardinfo/Cardonfos";
import Care from "./care/Care";
import Servics from "./services/Servics";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Cardonfos></Cardonfos>
      <Servics></Servics>
      <Care></Care>
    </div>
  );
};

export default Home;
