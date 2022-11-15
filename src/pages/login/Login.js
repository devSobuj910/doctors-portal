import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  const formSubmit = (form) => {
    console.log(form);
  };

  return (
    <div>
      <div>
        <form className="text-center" onSubmit={handleSubmit(formSubmit)}>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mx-auto bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: "email is rwquerd" })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="text-secondary" role="alert">
                    {errors.email?.message}
                  </p>
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
                    required: "password is rwquerd",
                    minLength: {
                      value: "6",
                      message: "password must be 6 caecter"
                    }
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.password && (
                  <p className="text-secondary" role="alert">
                    {errors.password?.message}
                  </p>
                )}
              </div>

              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: "password must be  need"
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password ?? (
                  <p role={alert}> {errors.password?.message}</p>
                )} */}
              {/* <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div> */}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-accent">
                  Login
                </button>
              </div>
              <p>
                new to doctors protal{" "}
                <Link className="text-secondary" to="/singup">
                  create a acount
                </Link>
              </p>
              <p className="divider text-xl">or</p>
              <button className=" btn btn-outlet">loing with google</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
    </div>
  </div>
</div>;
