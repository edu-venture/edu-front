import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Title from "../components/Title";
import SearchIcon from "@mui/icons-material/Search";

const Container = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
`;

const Button = styled.div`
  background: #171a2b;
  color: #fff;
  display: inline-block;
  border: none;
  border-radius: 20px;
  padding: 9px 11px;
  margin: 10px 7px;
`;

const SearchStudentField = styled.input`
  border: 1px solid black;
  border-radius: 20px;
  height: 45%;
  margin-right: 15px;
`;

const SearchStudentButton = styled.button`
  border: none;
  border-radius: 50%;
  background: #171a2b;
  color: #fff;
`;

const SelectResultListWraper = styled.div`
  border: none;
  border-radius: 20px 20px 0 0;
  width: 95%;
  height: 700px;
  overflow-y: auto;
  margin: 0 auto;
  backgroud: #ececec;
`;

const SelectResultHead = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  background: #171a2b;
  color: #fff;
  margin: 0;
  padding: 20px 0;
  border: none;
  border-radius: 20px 20px 0 0;
`;

const SelectResultItem = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  color: #171a2b;
  padding: 15px 0;
`;

const SelectResultItemSection = styled.li`
  text-align: center;
  flex: 1;
`;

const StudentSelect = () => {
  const [studentsData, setStudentsData] = useState([]); //학생 데이터
  const studentKeys = [
    "sid",
    "division",
    "name",
    "grade",
    "parentsPhoneNumber",
    "studentPhoneNumber",
    "class",
  ];

  useEffect(() => {
    axios
      .get("/SelectResultItems.json")
      .then((response) => {
        setStudentsData(response.data.students);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <div style={{ padding: "20px 0px 20px 50px" }}>
        <Title subtitle="[학원명]" title="학생 조회" />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ marginLeft: "50px" }}>
          <Button>선택 삭제</Button>
          <Button>학생 등록</Button>
        </div>
        <form
          style={{
            marginRight: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SearchStudentField />
          <SearchStudentButton>
            <SearchIcon></SearchIcon>
          </SearchStudentButton>
        </form>
      </div>
      <SelectResultListWraper>
        <SelectResultHead>
          <li>선택</li>
          <li>번호</li>
          <li>구분</li>
          <li>이름</li>
          <li>학년</li>
          <li>보호자 연락처</li>
          <li>학생 연락처</li>
          <li>반</li>
          <li>수정/삭제</li>
        </SelectResultHead>
        {studentsData &&
          studentsData.map((student) => (
            <SelectResultItem key={student.sid}>
              <li style={{ marginLeft: "50px" }}>
                <input type="checkbox" />
              </li>
              {studentKeys.map((key) => (
                <SelectResultItemSection key={key}>
                  {student[key]}
                </SelectResultItemSection>
              ))}
              <li style={{ display: "flex", marginRight: "50px" }}>
                <div style={{ cursor: "pointer" }}>수정 /</div>
                <div style={{ paddingLeft: "5px", cursor: "pointer" }}>
                  삭제
                </div>
              </li>
            </SelectResultItem>
          ))}
      </SelectResultListWraper>
    </Container>
  );
};

export default StudentSelect;
