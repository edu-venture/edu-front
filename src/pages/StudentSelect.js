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
  text-align: center;
  margin: 16px 0;
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
      "http://192.168.0.220:8081/user/user-list",
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
      "http://192.168.0.220:8081/user/getuser",
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
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [userList, setUserList] = useState([]);
  const [page, setPage] = useState(0);
  const [searchCondition, setSearchCondition] = useState("all");
  const [searchKeyword, setSearchKeyword] = useState("");

  // const [userInfo, setUserInfo] = useState([]);
  const navi = useNavigate();
  useEffect(() => {
    getUserList(page, searchCondition, searchKeyword, setUserList);
  }, [page, searchCondition, searchKeyword]);

  const handleCheckboxChange = (id, isChecked) => {
    // 체크박스가 체크되면 ID를 추가, 체크 해제되면 ID를 제거
    if (isChecked) {
      setSelectedUserIds((prevIds) => [...prevIds, id]);
      console.log(selectedUserIds);
    } else {
      setSelectedUserIds((prevIds) =>
        prevIds.filter((userId) => userId !== id)
      );
      console.log(selectedUserIds);
    }
  };
  const reloadUserList = useCallback(() => {
    getUserList(page, searchCondition, searchKeyword, setUserList);
  }, [page, searchCondition, searchKeyword, setUserList]);

  const handleSubmitSelectedUsers = useCallback(
    (e) => {
      console.log("보내려는selectuserids", selectedUserIds);
      // 선택된 사용자 ID를 서버로 전송

      const deleteIdsaxios = async () => {
        try {
          const response = await axios.post(
            "http://192.168.0.220:8081/user/deleteselectusers",
            { selectedUserIds },
            {
              headers: {
                Authorization: `Bearer ${sessionStorage.getItem(
                  "ACCESS_TOKEN"
                )}`,
              },
            }
          );
          if (response.data && response.data.item.msg) {
            alert(response.data.item.msg);
            navi("/admin/student");
            reloadUserList();
          }
        } catch (e) {
          console.log(e);
        }
      };
      deleteIdsaxios();
    },
    [selectedUserIds, reloadUserList, navi]
  );

  const changeSearchCondition = (e) => {
    setSearchCondition(() => e.target.value);
  };

  const changeSearchKeyword = (e) => {
    setSearchKeyword(() => e.target.value);
  };

  const searchFormSubmit = (e) => {
    e.preventDefault();

    setPage(() => 0);

    const searchAxios = async () => {
      try {
        const response = await axios.get(
          "http://192.168.0.220:8081/user/user-list",
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

        console.log(response);
        if (response.data && response.data.pageItems.content) {
          setUserList(() => response.data.pageItems.content);
        }
      } catch (e) {
        console.log(e);
      }
    };

    searchAxios();
  };

  return (
    <>
      <Container>
        <div style={{ padding: "20px 0px 20px 50px" }}>
          <Title subtitle="EduVenture" title="학생 조회" />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ marginLeft: "50px" }}>
            <Button onClick={handleSubmitSelectedUsers}>선택 삭제</Button>
            <Link to="/admin/student/join">
              <Button>학생 등록</Button>
            </Link>
          </div>
          <form id="searchForm" onSubmit={searchFormSubmit}>
            <div
              style={{
                marginRight: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <select
                id="searchCriteria"
                name="searchCondition"
                value={searchCondition}
                onChange={changeSearchCondition}
                style={{
                  marginRight: "10px",
                  height: "45%",
                  borderRadius: "20px",
                }}
              >
                <option value="all">전체</option>
                <option value="username">이름</option>
                <option value="useremail">이메일</option>
                <option value="userno">회원번호</option>
                <option value="usertype">신분</option>
                <option value="userbus">버스번호</option>
                <option value="userTel">핸드폰번호</option>
              </select>
              <SearchStudentField
                type="text"
                name="searchKeyword"
                value={searchKeyword}
                onChange={changeSearchKeyword}
              />
              <SearchStudentButton type="submit" id="btnSearch">
                <SearchIcon></SearchIcon>
              </SearchStudentButton>
            </div>
          </form>
        </div>
        <SelectResultListWraper>
          <SelectResultHead>
            <li style={{ width: "6%", flex: "0 0 auto" }}>선택</li>
            <li style={{ width: "6%", flex: "0 0 auto" }}>번호</li>
            <li style={{ width: "8%", flex: "0 0 auto" }}>이름</li>
            <li style={{ width: "8%", flex: "0 0 auto" }}>신분</li>
            <li style={{ width: "15%", flex: "0 0 auto" }}>이메일</li>
            <li style={{ width: "10%", flex: "0 0 auto" }}>학생 연락처</li>

            <li style={{ width: "10%", flex: "0 0 auto" }}>연관인 연락처</li>
            <li style={{ width: "8%", flex: "0 0 auto" }}>나이</li>
            <li style={{ width: "17%", flex: "0 0 auto", display: "none" }}>
              주소
            </li>
            <li style={{ width: "17%", flex: "0 0 auto", display: "none" }}>
              상세주소
            </li>
            <li style={{ width: "8%", flex: "0 0 auto" }}>버스번호</li>
            <li style={{ width: "8%", flex: "0 0 auto", display: "none" }}>
              joinuserid
            </li>

            <li style={{ width: "8%", flex: "0 0 auto" }}>학교</li>
            <li style={{ width: "17%", flex: "0 0 auto", display: "none" }}>
              등록일
            </li>

            <li style={{ width: "10%", flex: "0 0 auto" }}>수정/삭제</li>
          </SelectResultHead>

          {userList &&
            userList.map((user) => (
              <UserListItem
                key={user.id}
                user={user}
                reloadUserList={reloadUserList}
                handleCheckboxChange={handleCheckboxChange}
              />
            ))}
        </SelectResultListWraper>
      </Container>
    </>
  );
};

export default StudentSelect;
