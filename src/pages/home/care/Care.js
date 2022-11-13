import React from 'react';
import careimg from "../../.././assets/images/treatment.png"

const Care = () => {
    return (
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="w-1/2">
            <img  alt='' src={careimg} className="max-w-sm mx-auto rounded-lg shadow-2xl" />
          </div>
          <div className="w-1/2 p-5 m-auto  ">
            <h1 className="text-5xl font-bold ">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Care;