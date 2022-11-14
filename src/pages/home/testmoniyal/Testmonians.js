import React from "react";
import Tesmoniya from "./Tesmoniya";
import pepole1 from "../../.././assets/images/people1.png";
import people2 from "../../.././assets/images/people2.png";
import people3 from "../../.././assets/images/people3.png";
import quts from "../../.././assets/icons/quote.svg";

const Testmonians = () => {
  const testmoniyalinfo = [
    {
      id: 1,
      img: pepole1,
      describe:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "winson hary",
      city: "califoniya"
    },
    {
      id: 2,
      img: people2,
      describe:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "winson hary",
      city: "califoniya"
    },
    {
      id: 3,
      img: people3,
      describe:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "winson hary",
      city: "califoniya"
    }
  ];

  return (
    <div>
      <div className="flex justify-between ">
        <div>
          <h3 className="text-xl ">Testimonial</h3>
          <h1 className="text-3xl">why our patiyans say</h1>
        </div>
        <img className="w-24 h-24 " src={quts} alt="" />
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {testmoniyalinfo.map((info) => (
          <Tesmoniya key={info.id} info={info}></Tesmoniya>
        ))}
      </div>
    </div>
  );
};

export default Testmonians;
