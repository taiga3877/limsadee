import React from 'react';
import { MdComputer } from "react-icons/md";

const benefits = [
  { id: "01", title: "Adaptive", description: "The websites we create will be flexible. That is, they will have a tablet and mobile version. There will be no separate payment for this." },
  { id: "02", title: "Admin", description: "Your website will have a convenient and simple admin panel that will allow you to manage the site from within." },
  { id: "03", title: "Protection", description: "Our websites are protected by modern anti-virus and firewalls to resist spambots and attacks." },
  { id: "04", title: "Monitoring 24/7", description: "Your website is automatically monitored online 24 hours a day to keep it up and running." },
  { id: "05", title: "Domain and Hosting", description: "Domain and hosting run around, forget about headaches. We have domain UZ and hosting free for 6 months (then $10/month)." },
  { id: "06", title: "Unique Design", description: "The design of each site we create will be unique and different from other sites. One design is one site!" }
];

function Four() {
  return (
    <div className="bg-[#1C4DCB] text-white py-10 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          Why us? Why most people choose us?
        </h1>
        <h2 className="text-lg text-gray-300 text-center mb-10 font-semibold">
          Our Benefits
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center gap-4 transition-transform transform hover:scale-105 hover:bg-gray-700"
            >
              <div className="flex flex-col items-center text-center">
                <MdComputer className="text-4xl mb-2" />
                <h1 className="text-lg font-bold">{benefit.id}</h1>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{benefit.title}</h2>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Four;
