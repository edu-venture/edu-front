import React, { useState } from "react";
import Title from "../components/Title";
import ReceiptList from "../components/ReceiptSelect/ReceiptList";
import styled from "styled-components";
import { Link } from "react-router-dom";

const styles = {
  titleContainer: {
    padding: "20px 0px 20px 50px",
  },
  buttonsAndSearchContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    gap: "5px",
  },
  styleButton1: {
    marginLeft: "110px",
    width: "100px",
    height: "40px",
    backgroundColor: "#ffffff",
    color: "#171A2B",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "15px",
  },
  styleButton2: {
    width: "100px",
    height: "40px",
    backgroundColor: "#ffffff",
    color: "#171A2B",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "15px",
  },
  styleButton3: {
    width: "80px",
    height: "40px",
    backgroundColor: "#171a2b",
    color: "#ffffff",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "15px",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "20px",
  },
};

const Dropdown = styled.select`
  width: 90px;
  height: 40px;
  padding: 0 10px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

const SearchInput = styled.input`
  width: 200px;
  height: 40px;
  margin: 0 5px;
  border: none;
  padding: 0 15px;
  border-radius: 20px;
`;

const Teacher = () => {
  const [searchType, setSearchType] = useState("전체");
  const [searchText, setSearchText] = useState("");

  const handleDelete = () => {
    console.log("선택 항목 삭제");
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleSearch = () => {
    console.log(`검색 유형: ${searchType}, 검색어: ${searchText}`);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "calc(100vh - 50px)",
        overflow: "hidden",
        backgroundColor: "#4A4F6B",
        position: "relative",
      }}
    >
      <div style={styles.titleContainer}>
        <Title subtitle="EduVenture" title="수납 관리" color="#ffffff" />
      </div>

      <div style={styles.buttonsAndSearchContainer}>
        <>
          <button style={styles.styleButton1} onClick={handleDelete}>
            선택 삭제
          </button>
          <Link to="/admin/receipt/register">
            <button style={styles.styleButton2} onClick={handleDelete}>
              수납 등록
            </button>
          </Link>
        </>
        <div style={styles.searchContainer}>
          <Dropdown onChange={handleDropdownChange}>
            <option value="전체">전체</option>
            <option value="이름">이름</option>
            <option value="반">반</option>
            <option value="청구년월">청구년월</option>
          </Dropdown>
          <SearchInput
            placeholder="검색어 입력"
            value={searchText}
            onChange={handleSearchChange}
          />
          <button style={styles.styleButton3} onClick={handleSearch}>
            검색
          </button>
        </div>
      </div>

      <ReceiptList />
    </div>
  );
};

export default Teacher;
