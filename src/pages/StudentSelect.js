import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Title from "../components/Title";
import UserListItem from "../components/StudentSelect/UserListItem";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
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
  position: sticky;
  top: 0;
  z-index: 10;
  position: sticky; 
  top: 0;            
  z-index: 10;
  text-align: center;      
`;

const SelectResultList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  color: #171a2b;
  padding: 15px 0;
  text-align: center;
`;

const SelectResultItem = styled.li`
  flex: 0 0 auto;
`;

const getUserList = async (
  page,
  searchCondition,
  searchKeyword,
  setUserList,
  setTotalPages,
  setPageNumber,
  setPageSize
) => {
  try {
    const response = await axios.get(
      "http://192.168.0.220:9090/user/user-list",
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
        },
        params: {
          page: page,
          searchCondition: searchCondition,
          searchKeyword: searchKeyword,
        },
      }
    );
    console.log(sessionStorage.getItem("userId"));
    const user = {
      userId: sessionStorage.getItem("userId"),
    };
    const userresponse = await axios.post(
      "http://192.168.0.220:9090/user/getuser",
      user
    );
    console.log(userresponse);
    console.log(response);

    if (response.data && response.data.pageItems.content) {
      setUserList(() => response.data.pageItems.content);
      setTotalPages(() => response.data.pageItems.totalPages);
      setPageNumber(() => response.data.pageItems.pageable.pageNumber);
      setPageSize(() => response.data.pageItems.pageable.pageSize);
    }
  } catch (e) {
    console.log(e);
  }
};

const StudentSelect = () => {
<<<<<<< Updated upstream
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

  // const [userInfo, setUserInfo] = useState([]);
  const navi = useNavigate();
  useEffect(() => {
    axios
      .get("/SelectResultItems.json")
      .then((response) => {
        setStudentsData(response.data.students);
      })
      .catch((error) => {
        console.log(error);
      });
=======
  const [allStudentsData, setAllStudentsData] = useState([]); // 모든 학생 데이터(원본 데이터)
  const [studentsData, setStudentsData] = useState([]); // 화면에 표시될 학생 데이터
  const [checkedStudents, setCheckedStudents] = useState({}); //체크된 학생 상태 관리
  const [searchText, setSearchText] = useState(''); // 검색 텍스트 상태 관리
  const studentKeys = ["sid", "division", "name", "grade", "parentsPhoneNumber", "studentPhoneNumber", "class"];
  //SelectResultHead, SelectResultItem 컴포넌트에 width값 배열
  const columnWidths = ['6%', '6%', '8%', '8%', '6%', '17%', '17%', '17%', '15%']; 


  useEffect(() => {
    axios.get('/SelectResultItems.json')
    .then(response => {
      setStudentsData(response.data.students);
      setAllStudentsData(response.data.students);
    })
    .catch(error => {
      console.log(error);
    });
>>>>>>> Stashed changes
  }, []);

  const checkboxChangeHandler = (sid, isChecked) => {
    setCheckedStudents(prev => ({
      ...prev,
      [sid]: isChecked
    }));
  };

  const deleteSelectedHandler = () => {
    const newStudentsData = studentsData.filter(student => !checkedStudents[student.sid]); //체크되지 않은 상태의 학생
    setStudentsData(newStudentsData);
    setCheckedStudents({}); //체크 상태 초기화
  };

  const searchHandler = () => {
    const criteria = document.getElementById('searchCriteria').value;
    let filteredData;

    switch(criteria) {
      case 'all':
        // 전체 검색 로직
        filteredData = allStudentsData.filter(student => 
          Object.values(student).some(value => value.toString().includes(searchText)));
        break;
      case 'division':
        // 구분으로 검색
        filteredData = allStudentsData.filter(student => student.division.includes(searchText));
        break;
      case 'name':
        // 이름으로 검색
        filteredData = allStudentsData.filter(student => student.name.includes(searchText));
        break;
      case 'grade':
        // 학년으로 검색
        filteredData = allStudentsData.filter(student => student.grade.includes(searchText));
        break;
      case 'class':
        // 반으로 검색
        filteredData = allStudentsData.filter(student => student.class.includes(searchText));
        break;
    }
    setStudentsData(filteredData);
  }

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) { // 13은 엔터키의 keyCode입니다.
      searchHandler();
    }
  }

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
<<<<<<< Updated upstream
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
=======
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{marginLeft: '50px'}}>
            <Button onClick={deleteSelectedHandler}>선택 삭제</Button>
            <Button>학생 등록</Button>
          </div>
          <div style={{marginRight: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <select id='searchCriteria' style={{marginRight: '10px', height: '45%', borderRadius: '20px'}}>
              <option value='all'>전체</option>
              <option value='division'>구분</option>
              <option value='name'>이름</option>
              <option value='grade'>학년</option>
              <option value='class'>반</option>
            </select>
            <SearchStudentField value={searchText} onChange={(e) => setSearchText(e.target.value)} 
                                onKeyUp={handleKeyUp} />
            <SearchStudentButton typ e='button' onClick={searchHandler}>
              <SearchIcon></SearchIcon>
            </SearchStudentButton>
          </div>
        </div>
        <SelectResultListWraper>
          <SelectResultHead>
              <li style={{width: '6%', flex: '0 0 auto'}}>선택</li>
              <li style={{width: '6%', flex: '0 0 auto'}}>번호</li>
              <li style={{width: '8%', flex: '0 0 auto'}}>구분</li>
              <li style={{width: '8%', flex: '0 0 auto'}}>이름</li>
              <li style={{width: '6%', flex: '0 0 auto'}}>학년</li>
              <li style={{width: '17%', flex: '0 0 auto'}}>보호자 연락처</li>
              <li style={{width: '17%', flex: '0 0 auto'}}>학생 연락처</li>
              <li style={{width: '17%', flex: '0 0 auto'}}>반</li>
              <li style={{width: '15%', flex: '0 0 auto'}}>수정/삭제</li>
          </SelectResultHead>
          {studentsData.length === 0 ? (
             <div style={{textAlign: 'center', padding: '20px'}}>해당 검색결과를 찾을 수 없습니다</div>
          ) : (studentsData.map(student => (
            <SelectResultList key={student.sid}>
              <li style={{width: columnWidths[0]}}>
                <input type="checkbox"
                        checked={!!checkedStudents[student.sid]}
                        onChange={(e) => checkboxChangeHandler(student.sid, e.target.checked)}/>
              </li>
              {studentKeys.map((key, index) => (
                <SelectResultItem key={key} style={{width: columnWidths[index + 1]}}>{student[key]}</SelectResultItem>
              ))}
              <li style={{display: 'flex',  justifyContent: 'center', alignItems: 'center', width: columnWidths[8]}}>
                <div style={{cursor: 'pointer'}}>수정 /</div>
                <div style={{paddingLeft: '5px', cursor: 'pointer'}}>삭제</div>
              </li>
           </SelectResultList>
          )))}
        </SelectResultListWraper>
      </Container>
  )
}
>>>>>>> Stashed changes

export default StudentSelect;
