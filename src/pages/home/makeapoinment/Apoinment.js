import React from 'react';
import doctosimg from "../../.././assets/images/doctor-small.png"
import banerbg  from '../../.././assets/images/appointment.png'



const Apoinment = () => {
    return (
      <div
        className="hero h-96 relative my-48  "
        style={{ backgroundImage: `url(${banerbg})` }}
      >
        <div className="hero-content flex-col   lg:flex-row">
          <div className="w-1/2">
            <img
              src={doctosimg}
              alt=""
              className=" rounded-lg  max-w-lg bottom-0 absolute -mt-40"
            />
          </div>
          <div className=" w-1/2">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Apoinment;