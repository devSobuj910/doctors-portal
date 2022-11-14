import React from "react";
import Banner from "./baner/Banner";
import Cardonfos from "./cardinfo/Cardonfos";
import Care from "./care/Care";
import ContactForm from "./contactform/ContactForm";
import Apoinment from "./makeapoinment/Apoinment";
import Servics from "./services/Servics";
import Testmonians from "./testmoniyal/Testmonians";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Cardonfos></Cardonfos>
      <Servics></Servics>
      <Care></Care>
      <Apoinment></Apoinment>
      <Testmonians></Testmonians>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
