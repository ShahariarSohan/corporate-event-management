import React from "react";
import { auth } from "../firebase/firebase.config";
import { sendPasswordResetEmail } from "firebase/auth";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent");
      })
      .catch();
  };
  return (
    <div className="p-5">
      <h3 className="text-4xl text-center font-bold">Send Email</h3>
      <div className="card bg-base-100 w-full  mx-auto max-w-lg shrink-0 shadow-2xl my-10 ">
        <form onSubmit={handleResetPassword} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email "
              className="input w-full"
              placeholder="Email"
            />
            <button className="btn bg-purple-400 text-white mt-4">Send</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
