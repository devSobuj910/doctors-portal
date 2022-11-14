import React from "react";
import bgimg from "../../.././assets/images/appointment.png";
import Form from "./Form";

const ContactForm = () => {
  return (
    <div className="text-center my-14 py-16" style={{ backgroundImage: `url(${bgimg})` }}>
      <h4 className="text-xl">contuct us</h4>

      <h2 className="text-3xl">why contact us</h2>
      <div>
        <Form></Form>
      </div>
    </div>
  );
};

export default ContactForm;
