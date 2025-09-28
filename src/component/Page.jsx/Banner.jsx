import React from "react";
import DotGrid from "../Home/DotGrid";

function Banner() {
  return (
    <div className="bg-black h-screen">
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <DotGrid
          dotSize={4}
          gap={15}
          baseColor="#B4B4B6"
          activeColor="#311DB5"
          proximity={130}
          opacity={0.3}
        />
      </div>
    </div>
  );
}

export default Banner;
