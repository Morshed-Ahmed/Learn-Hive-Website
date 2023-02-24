import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import toast from "react-hot-toast";

const Checkout = () => {
  const handleSubmit = () => {
    toast.success("Congratulation");
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-xl font-bold">
                  Please provide your valid information
                </h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your address</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="address"
                  ></textarea>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="number"
                    className="input input-bordered"
                  />
                </div>

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

                <div className="form-control mt-6">
                  <button onClick={handleSubmit} className="btn btn-primary">
                    Continue to payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Checkout;
