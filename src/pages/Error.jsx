import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="space-y-20">
        <img src="/error.jpg" alt="" />
        <Link to="/" className="btn bg-purple-900 text-white">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
