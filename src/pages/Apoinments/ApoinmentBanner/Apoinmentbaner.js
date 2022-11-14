import React, { useState } from "react";
import chair from "../../.././assets/images/chair.png";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

const Apoinmentbaner = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img alt="" src={chair} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
          ></DayPicker>
          <p> you picked {format(selected, "PP")}</p>
        </div>
      </div>
    </div>
  );
};

export default Apoinmentbaner;
