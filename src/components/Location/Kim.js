// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// const MapContainer = styled.div`
//   background-color: #323232;
//   width: 60vw;
//   height: 60vh;
//   position: absolute;
//   left: 25%;
// `;

// const Map = () => {
//   const [map, setMap] = useState({ items: [] });

//   useEffect(() => {
//     axios
//       .get("http://192.168.0.220:7070/igiveyougps")
//       .then((response) => setMap(response.data));
//   }, []);
//   console.log(map);
//   return (
//     <MapContainer>
//       {map.items.map((element, index) => {
//         return (
//           <div key={index}>
//             <p>{element.id}</p>
//             <p>{element.carnumber}</p>
//             <p>{element.latitude}</p>
//           </div>
//         );
//       })}
//     </MapContainer>
//   );
// };

// export default Map;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Maps from "./Maps";

function Kim() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.0.220:7070/igiveyougps")
      .then((response) => setCars(response.data.items));
  }, []);

  return (
    <div>
      <Maps cars={cars} />
    </div>
  );
}

export default Kim;
