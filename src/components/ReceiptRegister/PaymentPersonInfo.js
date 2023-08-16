import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  background: #FAFAFA;
`;

const PaymentInfo = styled.div`
  width: 33%;
  margin-left: 50px;
`;

const InfoHead = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
`;

const TextInputField = styled.input`
  border: 1px solid black;
  border-radius: 20px;
  width: 80%;
  height: 40%;
`;



const PaymentPersonInfo = () => {
  return (
    <Container>
      <PaymentInfo>
        <InfoHead>반</InfoHead>
        <TextInputField type="text" />
      </PaymentInfo>
      <PaymentInfo>
        <InfoHead>학생명</InfoHead>
        <TextInputField type="text" />
      </PaymentInfo>
      <PaymentInfo>
        <InfoHead>청구연월</InfoHead>
        <TextInputField type="text" />
      </PaymentInfo>
    </Container>
  )
}

export default PaymentPersonInfo