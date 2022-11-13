import React from "react";

const Cardinfo = ({ card }) => {
  const { title, describe, img, id } = card;

  return (
    <div className="card card-side  bg-gray-700 text-white  shadow-xl">
      <figure>
        <img  className="w-28  p-7"  src={img} alt="Movie" />
      </figure>
      <div className="card-body p-3">
        <h2 className="card-title">{title}</h2>
        <p>{describe}</p>
      </div>
    </div>
  );
};

export default Cardinfo;
