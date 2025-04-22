import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      easing: "linear", // Animation easing
      once: true,
      // Whether animation should happen only once
      disable: "mobile",
    });
  }, []);

  return (
    <div>
      <h3 className="text-4xl text-center font-bold mt-10 mb-5">Our Events</h3>
      <p className="text-center py-6">
        A digital events organizer or digital events manager plans, coordinates,
        and executes virtual or online events, using technology to create
        engaging experiences for attendees. They oversee all aspects of the
        event, from initial planning and promotion to post-event analysis,
        ensuring a seamless and professional online experience. A digital events
        organizer or digital events manager plans, coordinates, and executes
        virtual or online events, using technology to create engaging
        experiences for attendees. They oversee all aspects of the event, from
        initial planning and promotion to post-event analysis, ensuring a
        seamless and professional online experience.
      </p>
      <h3 className="text-4xl text-center font-bold m-10 ">Categories</h3>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 container mx-auto mb-10 p-5"
        data-aos="zoom-in"
      >
        {events.map((event) => (
          <EventCard key={event.id} event={event}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default Events;
