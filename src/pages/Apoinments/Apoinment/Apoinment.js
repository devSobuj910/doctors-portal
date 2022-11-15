import React, { useState } from "react";
import Apoinmentavilavle from "../Apoinmentavilavle/Apoinmentavilavle";

import Apoinmentbaner from "../ApoinmentBanner/Apoinmentbaner";

const Apoinment = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <header>
      <Apoinmentbaner
        selected={selected}
        setSelected={setSelected}
      ></Apoinmentbaner>
      <Apoinmentavilavle selected={selected}></Apoinmentavilavle>
    </header>
  );
};

export default Apoinment;
