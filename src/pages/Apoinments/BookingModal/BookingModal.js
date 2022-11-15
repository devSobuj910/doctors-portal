import React from "react";
import format from "date-fns/format";

const BookingModal = ({ infoapoinmnet, setInfoapoinment, slecteddate }) => {
  const { name, slots } = infoapoinmnet;
  console.log(slecteddate);
  const date = format(slecteddate, "PP");

  const hnadlemodlaForm = (event) => {
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const slot = form.slot.value;

    const creaatApoinment = {
      precentName: name,
      email,
      number,
      tretmentDate: date,
      slot,
      tretmentName: name
    };
    setInfoapoinment(null);

    console.log(creaatApoinment);

    event.preventDefault();
  };

  return (
    <>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>

          <form onSubmit={hnadlemodlaForm} className="my-8">
            <input
              name="date"
              type="text"
              disabled
              value={date}
              className="input input-bordered w-full mb-6 max-w-full "
            />

            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot} selected>
                  {slot}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered w-full mb-6 max-w-full "
            />
            <input
              type="text"
              name="email"
              placeholder="email"
              className="input input-bordered w-full mb-6 max-w-full "
            />
            <input
              type="text"
              name="number"
              placeholder="number"
              className="input input-bordered w-full mb-6 max-w-full "
            />
            <input
              type="submit"
              value={"submit"}
              className="input input-bordered text-xl font-bold  bg-secondary text-center  w-full mb-6   max-w-full "
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
