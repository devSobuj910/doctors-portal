import React from 'react';



const Form = () => {
    return (
      <div className="hero">
        <div className="hero-content flex-col  sm:text-center ">
          <div className="card lg:w-96 shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">subject</span>
                </label>
                <input
                  type="text"
                  placeholder="subject"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">messege</span>
                </label>
                <textarea
                  className="textarea textarea-accent"
                  placeholder="Bio"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Form;