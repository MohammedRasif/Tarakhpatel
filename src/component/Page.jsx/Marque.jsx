import React from "react";
import Marquee from "react-fast-marquee";

function Marque() {
  return (
    <div>
        <p className="text-gray-300 pl-10 py-5 pb-16 text-center">
            Works with the devices and labs you already use
          </p>

      <Marquee>
        <div className="flex space-x-40">
          <h1 className="text-gray-400 text-5xl font-semibold">WATCH</h1>
          <h1 className="text-gray-400 text-5xl font-semibold">OURA</h1>
          <h1 className="text-gray-400 text-5xl font-semibold">Meta Quest</h1>
          <h1 className="text-gray-400 text-5xl font-semibold">WHOOP</h1>
          <h1 className="text-gray-400 text-5xl font-semibold">WHOOP</h1>
        </div>
      </Marquee>
    </div>
  );
}

export default Marque;
