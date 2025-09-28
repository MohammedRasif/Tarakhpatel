import React from "react";
import DotGrid from "../Home/DotGrid";

function Banner() {
  return (
    <div className="bg-black h-screen">
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <DotGrid
          dotSize={4}
          gap={15}
          baseColor="#1F2937" // Tailwind gray-700
          activeColor="#0000FF" // Distinct blue color
          proximity={150} // Larger effect area
          shockRadius={200}
          shockStrength={8}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
    </div>
  );
}

export default Banner;
