import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Title from "../components/Title";
import ReceiptSelectUpdateList from "../components/ReceiptSelect/ReceiptSelectUpdateList";
import { useParams } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  position: relative;
  background: #4a4f6b;
`;

const ReceiptWrapper = styled.div`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  background: #fafafa;
  margin-top: 60px;
  position: relative;
`;

const TotalPrice = styled.p`
  font-size: 2rem;
  font-weight: 400;
  position: absolute;
  top: 65px;
  right: 25px;
`;

const ReceiptSelectUpdate = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [userData, setUserData] = useState([]);
  const [allUserData, setAllUserData] = useState([]);

  const { payNo } = useParams();

  /** 수납관리 전체 리스트 데이터 */
  const allUserDataAxios = async () => {
    try {
      const resG = await axios.get(
        "http://192.168.0.7:8081/payment/admin/bill-list",
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
          },
        }
      );
      setAllUserData(resG.data);
      console.log("update, allUserData:", allUserData);
    } catch (error) {
      console.error("error ", error);
    }
  };

  useEffect(() => {
    allUserDataAxios();
  }, []);

  /** payNo에 해당하는 유저 값 받아오기.  */
  const getUserInfo = async () => {
    try {
      const response = await axios.get(
        `http://192.168.0.7:8081/payment/admin/${payNo}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
          },
        }
      );
      console.log("update payNo 요청", response.data.item);
      setUserData(response.data.item);
    } catch (error) {
      console.error("error ", error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  /** 세자리 수마다 ,표기해주는 함수 */
  const numberWithCommas = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <Container>
      <ReceiptWrapper>
        <div style={{ margin: "40px 20px 50px 20px" }}>
          <Title subtitle="EduVenture" title="수납 관리 수정"></Title>
          <TotalPrice>총액 {numberWithCommas(totalPrice)}원</TotalPrice>
        </div>
        {/** 여기가 반, 학생명, 청구년월 */}
        <ReceiptSelectUpdateList
          setTotalPrice={setTotalPrice}
          userData={userData}
          allUserData={allUserData}
        />
      </ReceiptWrapper>
    </Container>
  );
};

export default ReceiptSelectUpdate;
