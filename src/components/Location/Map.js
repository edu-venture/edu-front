import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import MapAPI from "./MapAPI";

const MapContainer = styled.div`
  background-color: #323232;
  width: 60vw;
  height: 60vh;
  position: absolute;
  left: 25%;
`;

const Map = () => {
  const [cars, setCars] = useState([]);
  const carNumber = cars.find((car) => car.carnumber === 1); // 차량 번호 확인

  useEffect(() => {
    axios
      .get("http://192.168.0.220:9090/igiveyougps")
      .then((response) => setCars(response.data.items));
  }, []);

  console.log(cars);

  return (
    <MapContainer>
      {carNumber ? <MapAPI location={carNumber} /> : null}
    </MapContainer>
  );
};

export default Map;
