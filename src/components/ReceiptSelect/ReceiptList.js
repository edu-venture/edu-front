import React from "react";
import styled from "styled-components";
import ReceiptItem from "./ReceiptItem";

const Container = styled.div`
  width: 90%;
  height: 700px;
  margin: 20px auto 0 auto;
  background: #ececec;
  border-radius: 20px 20px 0 0;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background-color: #171a2b;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Th = styled.th`
  height: 50px;
  text-align: center;
  color: #fff;
  font: 15px ligther;
  padding: 0px 20px;
`;

const Tbody = styled.tbody``;

const ReceiptList = () => {
  return (
    <Container>
      <Table>
        <Thead>
          <tr>
            <Th>선택</Th>
            <Th>번호</Th>
            <Th>이름</Th>
            <Th>반</Th>
            <Th>청구년월</Th>
            <Th>금액</Th>
            <Th>학부모 연락처</Th>
            <Th>결제 방식</Th>
            <Th>상태</Th>
            <Th>수정 / 삭제</Th>
          </tr>
        </Thead>
        <Tbody>
          <ReceiptItem
            id="0001"
            name="홍길동"
            group="고3월금A반"
            chargeMonth="2023-07"
            chargeMoney="350,000"
            parentContact="010-0000-0000"
            paymentMethod="card"
            state="결제 완료"
          />
        </Tbody>
      </Table>
    </Container>
  );
};

export default ReceiptList;
