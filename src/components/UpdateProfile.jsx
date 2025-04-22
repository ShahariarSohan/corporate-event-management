import { updateProfile } from "firebase/auth";
import React from "react";
import { auth } from "../firebase/firebase.config";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        toast.success("Profile Updated successfully");
      })
      .catch();
  };
  return (
    <div className="p-5">
      <h3 className="text-4xl text-center font-bold">Update Profile</h3>
      <div className="card bg-base-100 w-full  mx-auto max-w-lg shrink-0 shadow-2xl my-10 ">
        <form onSubmit={handleUpdate} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text "
              className="input w-full"
              placeholder="Name"
            />
            <label className="label">PhotoURL</label>
            <input
              name="photoURL"
              type="text "
              className="input w-full"
              placeholder="PhotoURL"
            />
            <button className="btn bg-purple-400 text-white mt-4">
              Update
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
