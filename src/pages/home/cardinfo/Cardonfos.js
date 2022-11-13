import React from "react";
import Cardinfo from "./Cardinfo";
import icon1 from "../../.././assets/icons/clock.svg";
import icon2 from "../../.././assets/icons/phone.svg";
import icon3 from "../../.././assets/icons/marker.svg";

const Cardonfos = () => {
  const cartinfo = [
    {
      id: 1,
      title: "opening hour",
      describe: "9 am to 5 pm  colck",
      img: icon1
    },
    {
      id: "2",
      title: "location",

      describe: "dhaka bannerimg",
      img: icon2
    },

    {
      id: "3",
      title: "Contact information",

      describe: "hasnamdsobuj@gmail.com",
      img: icon3
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
      {cartinfo.map((cartdata) => (
        <Cardinfo key={cartdata.id} card={cartdata}></Cardinfo>
      ))}
    </div>
  );
};

export default Cardonfos;
