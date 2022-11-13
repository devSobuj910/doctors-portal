import React from "react";
import bgpng from "../.././././../assets/images/bg.png";
import bannerimg from "../.././../assets/images/chair.png";

const Banner = () => {
  return (
    <div className="hero  " style={{ backgroundImage: `url("${bgpng}")` }}>
      <div className="hero-content  lg:h-[500px] flex-col lg:flex-row-reverse">
        <div className=" lg:w-1/2">
          <img src={bannerimg} className="  lg:p-8  rounded-lg " />
        </div>
        <div className=" lg:w-1/2">
          <h1 className=" lg:text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
