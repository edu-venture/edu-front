import React from "react";
import styled from "styled-components";
import TeacherItem from "./TeacherItem";

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
  background-color: #5ac467;
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

const TeacherList = () => {
  return (
    <Container>
      <Table>
        <Thead>
          <tr>
            <Th>선택</Th>
            <Th>번호</Th>
            <Th>이름</Th>
            <Th>이메일</Th>
            <Th>연락처</Th>
            <Th>승인 여부</Th>
            <Th>반</Th>
            <Th>승인 / 수정 / 삭제</Th>
          </tr>
        </Thead>
        <Tbody>
          <TeacherItem
            id="0001"
            name="홍길동"
            email="teacher@naver.com"
            contact="010-0000-0000"
            approval="승인"
            group="고1화목A반"
          />
          <TeacherItem
            id="0002"
            name="아무개"
            email="amuge@naver.com"
            contact="010-2222-2222"
            approval="미정"
            group="미정"
          />
          <TeacherItem
            id="0003"
            name="김선생"
            email="kim@naver.com"
            contact="010-3333-3333"
            approval="거부"
            group="미정"
          />
        </Tbody>
      </Table>
    </Container>
  );
};

export default TeacherList;
