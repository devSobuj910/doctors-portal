import React from "react";

const ApoinmentsDittails = ({ dettils, setInfoapoinment }) => {
  const { name, slots } = dettils;
  return (
    <div className="card bg-base-100 shadow-xl  text-center ">
      <div className="card-body text-center mx-auto">
        <h2 className="card-title">{name}</h2>
        <p>{slots.length > 0 ? slots[4] : "try to another time"}</p>

        <p>
          {slots.length}
          {slots.length > 1 ? " spaces" : "space"} avilabe
        </p>

        <div className="card-actions justify-center py-4">
          <label
            disable={slots.length === 0}
            onClick={() => setInfoapoinment(dettils)}
            htmlFor="booking-modal"
            className="btn btn-secondary"
          >
            book apoinmet
          </label>
        </div>
      </div>
    </div>
  );
};

export default ApoinmentsDittails;
