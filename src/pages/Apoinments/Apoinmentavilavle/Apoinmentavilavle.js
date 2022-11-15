import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import ApoinmentsDittails from "../Apoinmentdetails/ApoinmentsDittails";
import BookingModal from "../BookingModal/BookingModal";

const Apoinmentavilavle = ({ selected }) => {
  const [apoinments, setApoinmentDittails] = useState([]);
  const [infoapoinmnet, setInfoapoinment] = useState(null);

  useEffect(() => {
    fetch("apoinment.json")
      .then((response) => response.json())
      .then((data) => setApoinmentDittails(data));
  }, []);

  return (
    <section className="my-8 text-center">
      <h3 className="text-2xl text-secondary font-bold capitalize">
        this day avilabe {format(selected, "PP")}
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7 my-8">
        {apoinments.map((dettils) => (
          <ApoinmentsDittails
            setInfoapoinment={setInfoapoinment}
            key={dettils._id}
            dettils={dettils}
          ></ApoinmentsDittails>
        ))}

        {infoapoinmnet && (
          <BookingModal
            slecteddate={selected}
            infoapoinmnet={infoapoinmnet}
            setInfoapoinment={setInfoapoinment}
          ></BookingModal>
        )}
      </div>
    </section>
  );
};

export default Apoinmentavilavle;
