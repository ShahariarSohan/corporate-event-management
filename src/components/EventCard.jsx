import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const { id, title, image, description, division } = event;
  return (
    <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 ">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8 mt-auto overflow-hidden h-80  ">
        <div className="space-y-2 overflow-y-auto">
          <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
          <p className="dark:text-gray-800">{description.slice(0, 40)}</p>
          <p className=" text-purple-600 font-bold text-sm">{division}</p>
        </div>
        <div>
          <Link
            to={`/events/${id}`}
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold  rounded-md bg-purple-400 text-white"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
