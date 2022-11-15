import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Authcontext/Authprovaider";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [firebasero, setFirebasero] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  const formSubmit = (form) => {
    console.log(form);
    setFirebasero("");
    login(form.email, form.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((ero) => {
        console.dir(ero.message);
        setFirebasero(ero.message);
      });
  };

  return (
    <div>
      <div>
        <form className="text-center" onSubmit={handleSubmit(formSubmit)}>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mx-auto bg-base-100">
            <h1 className="text-2xl font-bold mt-5 r capitalize text-primary ">
              login
            </h1>
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

              {firebasero && (
                <span className="text-secondary">{firebasero}</span>
              )}

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
