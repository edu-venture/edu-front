import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Title from '../components/Title';
import PaymentPersonInfo from '../components/ReceiptRegister/PaymentPersonInfo';
import ReceiptDetail from '../components/ReceiptRegister/ReceiptDetail';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: #4A4F6B;
`;

const ReceiptWrapper = styled.div`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  background: white;
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

const Divider = styled.div`
  width: 100%;
  height: 3px;
  background: #E3E3E3;
  margin: 40px 0;
`;

const ReceiptRegister = () => {
  return (
    <Container>
      <ReceiptWrapper>
        <div style={{margin: '50px'}}>
          <Title subtitle='[학원명]' title='수납 등록'></Title>
          <TotalPrice>총액 1000000원</TotalPrice>
        </div>
        <Divider />
        <PaymentPersonInfo></PaymentPersonInfo>
        <Divider />
        <ReceiptDetail />
      </ReceiptWrapper>
    </Container>
  )
}

export default ReceiptRegister