import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Authcontext/Authprovaider";

const Sinup = () => {
  const { creatuser, upgradeuser } = useContext(AuthContext);
  const [sinuperr, setSinuperp] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);

    creatuser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast("user login success");
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });

    const userinfo = {
      displayName: data.name
    };
    upgradeuser(userinfo)
      .then(() => {})
      .catch((eror) => {
        setSinuperp(eror);
      });
  };

  return (
    <div>
      <div>
        <form className="text-center" onSubmit={handleSubmit(onsubmit)}>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mx-auto bg-base-100">
            <h1 className="text-2xl font-bold mt-5 r capitalize text-primary ">
              singup
            </h1>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("name", {
                    required: true
                  })}
                />
                {errors.name && (
                  <span className="text-secondary text-left">
                    name is requered
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  //   required
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", {
                    required: "email is required"
                  })}
                />
                {errors.email && (
                  <span className="text-secondary text-left">
                    {errors.email?.message}
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "password must be stonge"
                    }
                  })}
                />
                {errors.password && (
                  <span className="text-secondary text-left">
                    {errors.password?.message}
                  </span>
                )}
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-accent">
                  singup
                </button>
              </div>
              <p>
                <Link className="text-secondary" to="/login">
                  alredy haven acount
                </Link>
              </p>
              <p className="divider text-xl">or</p>
              <button className=" btn btn-outlet">loing with google</button>

              {sinuperr && (
                <span className="text-secondary text-left">{sinuperr}</span>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sinup;
