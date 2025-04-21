import React from "react";

import concept from "../assets/icons/concept.png";
import design from "../assets/icons/design.png";
import vision from "../assets/icons/vision.png";
import budget from "../assets/icons/budget.png";
const HowWeWorks = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col mx-auto text-center justify-center max-w-xl space-y-5">
        <h1 className="font-bold text-4xl">Our Work Process</h1>
        <p className="text-sm">
          Halal Events specializes in planning, organizing, and executing
          various types of events, including conferences, trade shows, weddings,
          parties, and more.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 lg:p-10 ">
        <div className="flex flex-col justify-start p-5 bg-purple-400 rounded-md space-y-3">
          <img className="w-10 h-10" src={concept} alt="" />
          <h3 className="font-bold">Concept</h3>
          <p>Halal Events are popular for their mind blowing unique concept.</p>
        </div>
        <div className="flex flex-col justify-start p-5 bg-purple-400 rounded-md space-y-3">
          <img className="w-10 h-10" src={vision} alt="" />
          <h3 className="font-bold">Visions</h3>
          <p>Halal Events are popular for their mind blowing unique visions.</p>
        </div>
        <div className="flex flex-col justify-start p-5 bg-purple-400 rounded-md space-y-3">
          <img className="w-10 h-10" src={design} alt="" />
          <h3 className="font-bold">Design</h3>
          <p>Halal Events are popular for their mind blowing unique designs.</p>
        </div>
        <div className="flex flex-col justify-start p-5 bg-purple-400 rounded-md space-y-3">
          <img className="w-10 h-10" src={budget} alt="" />
          <h3 className="font-bold">Budget</h3>
          <p>Halal Events are popular for their mind blowing unique budgets.</p>
        </div>
      </div>
    </div>
  );
};

export default HowWeWorks;
