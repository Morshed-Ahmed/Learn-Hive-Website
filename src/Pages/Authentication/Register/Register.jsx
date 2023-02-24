import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Register = () => {
  const { signUp, EmailVerification, updateUser, user } =
    useContext(AuthContext);

  const navigate = useNavigate();

  console.log(user);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signUp(data.email, data.password)
      .then((userCredential) => {
        emailVerification();
        const userInfo = {
          displayName: data.displayName,
          photoURL: data.imageUrl,
        };
        updateUser(userInfo)
          .then(() => {
            navigate("/login");
          })
          .catch((error) => {
            console.log(error);
          });
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    const emailVerification = () => {
      EmailVerification().then(() => {
        // Email verification sent!
        // ...
        alert("Please check your email and verify your email address.");
      });
    };
  };

  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="hero min-h-screen lg:w-[1100px] mx-auto bg-base-200"
        >
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Register now!</h1>
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
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    {...register("displayName", { required: true })}
                    placeholder="Username"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image Url</span>
                  </label>
                  <input
                    type="text"
                    {...register("imageUrl", { required: true })}
                    placeholder="Image Url"
                    className="input input-bordered"
                  />
                </div>

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

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
