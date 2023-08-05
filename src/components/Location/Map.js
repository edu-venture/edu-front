import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Maps from "./Maps";

const MapContainer = styled.div`
  background-color: #323232;
  width: 60vw;
  height: 60vh;
  position: absolute;
  left: 25%;
`;

const Map = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.0.220:7070/igiveyougps")
      .then((response) => setCars(response.data.items));
  }, []);

  return (
    <MapContainer>
      <Maps cars={cars} />
    </MapContainer>
  );
};

export default Map;
