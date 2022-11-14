import React from "react";
import doctosimg from "../../.././assets/images/doctor-small.png";
import banerbg from "../../.././assets/images/appointment.png";

const MakeApoinment = () => {
  return (
    <div
      className="flex justify-between  my-20 "
      style={{ backgroundImage: `url(${banerbg})` }}
    >
      <div className="w-1/2 hidden lg:block md:block ">
        <img className="lg:-mt-20 md:-mt-16   " src={doctosimg} alt="" />
      </div>
      <div className="w-1/2  p-9 lg:p-16 ">
        <h3 className="text--xl text-red-500">apoinment</h3>
        <h2 className="text-3xl text-amber-900">how apoinment wi us</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, cumque!
          Consequatur beatae minus accusamus a quae, similique nulla error
          reprehenderit eaque doloribus officiis vel voluptatibus dolorum earum
          minima praesentium ut?
        </p>
        <button className="button btn-primary p-4  rounded-lg  btn-btn-xl">
          get start
        </button>
      </div>
    </div>
  );
};

export default MakeApoinment;
