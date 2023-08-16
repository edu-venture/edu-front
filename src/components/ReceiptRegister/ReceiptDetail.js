import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background: #FAFAFA;
`;

const PaymentInfo = styled.div`
  width: 49%;
`;

const InfoHead = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
`;

const TextInputField = styled.input`
  border: none;
  width: 95%;
  height: 40%;
  margin-left: 10px;
`;

const ReceiptDetail = () => {
  return (
    <Container>
      <PaymentInfo>
        <InfoHead>상세내역</InfoHead>
        <TextInputField></TextInputField>
      </PaymentInfo>
      <PaymentInfo>
        <InfoHead>가격</InfoHead>
        <TextInputField></TextInputField>
      </PaymentInfo>
    </Container>
  )
}

export default ReceiptDetail