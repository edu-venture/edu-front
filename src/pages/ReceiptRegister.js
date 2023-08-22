import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Title from "../components/Title";
import PaymentPersonInfo from "../components/ReceiptRegister/PaymentPersonInfo";
import ReceiptDetail from "../components/ReceiptRegister/ReceiptDetail";

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

const ReceiptRegister = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  //세자리 수마다 ,표기해주는 함수
  const numberWithCommas = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Container>
      <ReceiptWrapper>
        <div style={{ margin: "50px" }}>
          <Title subtitle="[학원명]" title="수납 등록"></Title>
          <TotalPrice>총액 {numberWithCommas(totalPrice)}원</TotalPrice>
        </div>
        <PaymentPersonInfo></PaymentPersonInfo>
        <ReceiptDetail setTotalPrice={setTotalPrice} />
      </ReceiptWrapper>
    </Container>
  );
};

export default ReceiptRegister;
