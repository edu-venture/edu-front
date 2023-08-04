import React from "react";
import Car from "./Car";

function Maps({ cars }) {
  return (
    <div>
      {cars.map((car) => (
        <Car key={car.carnumber} gps={car} />
      ))}
    </div>
  );
}

export default Maps;
