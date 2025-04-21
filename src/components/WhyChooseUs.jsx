import React from "react";
import banner1 from "../assets/banner/banner1.jpg";
import banner2 from "../assets/banner/banner2.jpg";
import banner3 from "../assets/banner/banner3.jpg";
const WhyChooseUs = () => {
  return (
    <div className="p-10">
      <h3 className="text-center font-bold text-4xl md:mb-5 lg:mb-10">
        Why Choose Us
      </h3>
      <div className="hero lg:mb-20">
        <div className="hero-content flex-col lg:flex-row">
          <img src={banner1} className="md:max-w-sm rounded-lg shadow-2xl" />
          <div className="text-center lg:text-end">
            <h1 className="text-4xl font-bold">
              Enhanced Reach and Accessibility
            </h1>
            <p className="py-6">
              Digital event organizers can reach a global audience, eliminating
              geographical barriers and enabling wider participation. Digital
              event organizers can reach a global audience, eliminating
              geographical barriers and enabling wider participation. .
            </p>
          </div>
        </div>
      </div>
      <div className="hero lg:mb-20">
        <div className="hero-content flex-col-reverse lg:flex-row">
          <div className="text-center lg:text-start">
            <h1 className="text-4xl font-bold">
              Interactive and Engaging Experiences
            </h1>
            <p className="py-6">
              Digital events can incorporate interactive features like live Q&A
              sessions, polls, breakout rooms, and gamification to enhance
              attendee engagement.Digital events can incorporate interactive
              features like live Q&A sessions, polls, breakout rooms, and
              gamification to enhance attendee engagement.
            </p>
          </div>
          <img src={banner2} className="md:max-w-sm rounded-lg shadow-2xl" />
        </div>
      </div>
      <div className="hero lg:mb-20">
        <div className="hero-content flex-col lg:flex-row">
          <img src={banner3} className="md:max-w-sm rounded-lg shadow-2xl" />
          <div className="text-center lg:text-end">
            <h1 className="text-4xl font-bold">
              Customized and Scalable Solutions
            </h1>
            <p className="py-6">
              Digital event organizers can tailor events to specific needs and
              scale them up or down based on demand.Digital event organizers can
              tailor events to specific needs and scale them up or down based on
              demand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
