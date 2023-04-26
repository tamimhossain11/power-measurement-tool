import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-40 bg-white">
      <div className="container mx-auto px-10 md:px-28 lg:px-80 py-8">
        <div className="flex justify-between items-center">
          <div className="text-purple-400">
            <div
              className="text-2xl font-bold"
            >
              Power Consumption Measurement
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
