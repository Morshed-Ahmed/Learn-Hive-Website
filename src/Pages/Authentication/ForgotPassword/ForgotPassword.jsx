import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Contexts/AuthProvider";

const ForgotPassword = () => {
  const { forgotPassword } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    forgotPassword(data.email)
      .then(() => {
        // Password reset email sent!
        // ..
        alert("Password reset email send,Please check your email.");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="hero min-h-screen lg:w-[1100px] mx-auto bg-base-200 "
        >
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Forgot Your Password</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Reset Password</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
