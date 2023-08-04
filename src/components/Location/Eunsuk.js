import React, { useEffect, useState, useRef } from "react";

function Eunsuk({ location }) {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  // const [polyline, setPolyline] = useState(null);
  const [gps, setGps] = useState(null);
  const mapRef = useRef();

  // Naver Maps script loading
  useEffect(() => {
    console.log("이건로케이션");
    console.log(location);
    console.log("이건로케이션");

    const script = document.createElement("script");
    script.src =
      "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=kgs02uxrvy";
    document.head.appendChild(script);

    script.onload = () => setGps(location); // Set gps state after script is loaded

    return () => {
      script.remove();
    };
  }, [location]);

  // Create map, marker and polyline
  useEffect(() => {
    if (!gps) return;

    //여깃은 경로를 그리는거
    //여깃은 경로를 그리는거
    //여깃은 경로를 그리는거
    //여깃은 경로를 그리는거
    //여깃은 경로를 그리는거

    const polylinePath = [
      new window.naver.maps.LatLng(37.509601, 127.11172),
      new window.naver.maps.LatLng(37.508255, 127.110878),
      new window.naver.maps.LatLng(37.506332, 127.108978),
      new window.naver.maps.LatLng(37.503855, 127.111735),
      new window.naver.maps.LatLng(37.504391, 127.112504),
      new window.naver.maps.LatLng(37.50443, 127.112827),
      new window.naver.maps.LatLng(37.503791, 127.11382),
      new window.naver.maps.LatLng(37.504783, 127.114777),
      new window.naver.maps.LatLng(37.507789, 127.116694),
      new window.naver.maps.LatLng(37.510339, 127.112096),
    ];

    const mapOptions = { zoom: 15 };
    const mapInstance = new window.naver.maps.Map(mapRef.current, mapOptions);

    //여기는 학원의 위치를 지도위에 표시하는거
    //여기는 학원의 위치를 지도위에 표시하는거
    //여기는 학원의 위치를 지도위에 표시하는거
    //여기는 학원의 위치를 지도위에 표시하는거

    const markerPosition = new window.naver.maps.LatLng(37.509601, 127.11172);
    const customIconUrl1 =
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FFNsTD%2Fbtso8zY4mjW%2FQhjAS5xAOLJXlAeDXYNEC0%2Fimg.png"; // Icon for the first marker
    const markerInstance1 = new window.naver.maps.Marker({
      position: markerPosition,
      map: mapInstance,
      icon: {
        url: customIconUrl1,
        scaledSize: new window.naver.maps.Size(46, 50),
      },
    });

    setMarker(markerInstance1);

    //여기부터 차를 지도위에 표시하는거
    //여기부터 차를 지도위에 표시하는거
    //여기부터 차를 지도위에 표시하는거

    let markerInstance;

    if (gps.carnumber == "1") {
      markerInstance = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(gps.latitude, gps.longitude),
        map: mapInstance,
        icon: {
          url: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdqoJzG%2Fbtso927bDSA%2FYaak0dYr59WrU7WayDdhD1%2Fimg.png",
          scaledSize: new window.naver.maps.Size(47, 25),
        },
      });
    } else if (gps.carnumber == "2") {
      markerInstance = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(gps.latitude, gps.longitude),
        map: mapInstance,
        icon: {
          url: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDF7ic%2Fbtso5td6KCO%2FT2E2wrtkWRx4cGAsgTEUek%2Fimg.png",
          scaledSize: new window.naver.maps.Size(47, 25),
        },
      });
    } else if (gps.carnumber == "3") {
      markerInstance = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(gps.latitude, gps.longitude),
        map: mapInstance,
        icon: {
          url: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0meLk%2Fbtso6rfNSo7%2FyuK1fOjNUGUwSuMeOKtkzK%2Fimg.png",
          scaledSize: new window.naver.maps.Size(47, 25),
        },
      });
    } else {
      markerInstance = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(gps.latitude, gps.longitude),
        map: mapInstance,
        icon: {
          url: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0meLk%2Fbtso6rfNSo7%2FyuK1fOjNUGUwSuMeOKtkzK%2Fimg.png",
          scaledSize: new window.naver.maps.Size(47, 25),
        },
      });
    }

    const polylineInstance = new window.naver.maps.Polyline({
      path: polylinePath,
      strokeColor: "#217701",
      strokeOpacity: 0.8,
      strokeWeight: 6,
      map: mapInstance,
    });

    setMap(mapInstance);
    setMarker(markerInstance);
    // setPolyline(polylineInstance);
  }, [gps]);

  // Update marker and map center
  useEffect(() => {
    if (map && marker) {
      const position = new window.naver.maps.LatLng(
        gps.latitude,
        gps.longitude
      );
      marker.setPosition(position);
      map.setCenter(position);
    }
  }, [gps, map, marker]);

  return <div ref={mapRef} style={{ width: "700px", height: "700px" }}></div>;
}

export default Eunsuk;
