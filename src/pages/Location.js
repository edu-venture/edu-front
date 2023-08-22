import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import Map from "../components/Location/Map";
import axios from "axios";

const LocationContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const styles = {
  titleContainer: {
    padding: "20px 0px 20px 50px",
  },
};

const Location = () => {
  const [cars, setCars] = useState([]);
  const [gps, setGps] = useState([]);
  const carNumber = cars.find(
    (car) => car.carnumber == sessionStorage.getItem("userBus")
  ); // 차량 번호 확인
  const [phoneNumber, setPhoneNumber] = useState("");
  const [content, setContent] = useState("");
  const [carnumberPhoto, setCarnumberPhoto] = useState({});
  const [carPhotoPath, setCarPhotoPath] = useState("");
  useEffect(() => {
    const userbusnumbertogetphoto = sessionStorage.getItem("userBus");

    axios.get("http://192.168.0.220:8081/igiveyougps").then((response) => {
      setCars(response.data.items);
      setGps(
        response.data.items.find(
          (item) =>
            item.carnumber === parseInt(sessionStorage.getItem("userBus"), 10)
        )
      );
      return response.data.items; // 이 값을 반환하여 다음 .then에서 사용합니다.
    });
    axios
      .get("http://192.168.0.220:8081/trytogetphotofromserver", {
        params: {
          userBus: userbusnumbertogetphoto,
        },
      })
      .then((response) => {
        console.log("사진 받아 온 응답이다", response);
        setCarnumberPhoto(response.data.item);
        setCarPhotoPath(response.data.item.photoname);
      });

    console.log("차량 번호에 맞는 사진이다", carnumberPhoto);
    console.log("차량들이다", cars);
    console.log("gps", gps);
    console.log(gps.phonenumber);
  }, []);

  console.log(cars);
  console.log(gps);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const messageDto = {
      // to: phoneNumber,
      to: gps.phonenumber.slice(1, -1),
      content: content,
    };

    try {
      const response = await axios.post(
        "http://192.168.0.220:8081/sms/send",
        messageDto
      );
      console.log("Message sent successfully:", response.data);
      alert("기사님께 문자를 보냈습니다!");
      setContent("");

      // 여기에 성공 시 처리 로직을 추가할 수 있습니다.
    } catch (error) {
      console.error("An error occurred while sending the message:", error);
      // 여기에 오류 처리 로직을 추가할 수 있습니다.
    }
  };

  return (
    <LocationContainer>
      <div style={styles.titleContainer}>
        <Title subtitle="실시간" title="차량 위치" />
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "relative",
            left: "5%",
            display: "flex",
          }}
        >
          <Map carNumber={carNumber} />
          <div
            style={{
              marginLeft: "6vw",
              height: "60vh",
              border: "4px solid green",
              borderRadius: "30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyItems: "center",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                기사님께 전할말
              </div>
              <form onSubmit={handleSubmit}>
                <p style={{ textAlign: "center", color: "green" }}>
                  매너를 지켜주세요. 기사님도 누군가의 가족이랍니다
                </p>
                <table
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyItems: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <tr className="form-group" style={{ display: "block" }}>
                    <td>
                      <input
                        style={{ display: "block" }}
                        type="hidden"
                        className="form-control"
                        name="to"
                        placeholder="핸드폰 번호를 입력하세요"
                        value={gps.phonenumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr className="form-group">
                    <td style={{ display: "flex", justifyContent: "center" }}>
                      <textarea
                        style={{ width: "100%", padding: "7px" }}
                        className="form-control"
                        id={"smscontent" + `${gps.carnumber}`}
                        value={content} // 이 부분을 추가합니다.
                        name="content"
                        placeholder="To.든든한 기사님"
                        cols="40"
                        rows="10"
                        onChange={(e) => setContent(e.target.value)}
                      ></textarea>
                    </td>
                  </tr>
                  <button
                    style={{ width: "4vw", height: "2vh", marginTop: "5px" }}
                    className="btn btn-default"
                    type="submit"
                  >
                    발송
                  </button>
                </table>
              </form>
            </div>
            <p></p>
            <div
              style={{
                width: "23vw",
                height: "27vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "90%", height: "90%", borderRadius: "9px" }}
                // src="https://www.hapt.co.kr/news/photo/202212/157569_27726_4728.png" alt=""/>
                src={carPhotoPath}
                alt=""
              />
              {/*<p>{carPhotoPath}</p>*/}
              <p style={{ fontWeight: "bold" }}>
                {gps.carnumber}번 버스의 마지막 등원사진
              </p>
            </div>
          </div>
        </div>
      </div>
    </LocationContainer>
  );
};

export default Location;
