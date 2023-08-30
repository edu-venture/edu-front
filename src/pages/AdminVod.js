import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import AdminVodList from "../components/AdminVod/AdminVodList";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const styles = {
  container: {
    width: "100vw",
    height: "auto",
    overflow: "hidden",
    backgroundColor: "#5AC467",
    position: "relative",
  },
  titleContainer: {
    padding: "20px 0px 20px 50px",
  },
  selectBox: {
    borderRadius: "10px",
    height: "27.5px",
    width: "100px",
    border: "none",
    marginRight: "5px",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "5vw",
    alignItems: "center",
    position: "relative",
  },
  searchInput: {
    borderRadius: "10px",
    width: "400px",
    height: "25px",
    border: "none",
  },
  searchButton: {
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#5AC467",
    border: "none",
    borderRadius: "50%",
    padding: 0,
    minWidth: 0,
    marginLeft: "5px",
  },
  searchIcon: {
    width: "30px",
    color: "#5AC467",
    fontSize: "30px",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
    borderRadius: "50%",
    background: "#ffffff",
  },
  writeButton: {
    background: "#ffffff",
    borderRadius: "10px",
    position: "absolute",
    right: "5.5vw",
    top: "50%",
    transform: "translateY(-50%)",
    color: "black",
    "&:hover": {
      backgroundColor: "#e0e0e0",
    },
  },
};

const AdminVod = () => {
  const [searchOption, setSearchOption] = useState("전체");
  const [searchText, setSearchText] = useState("");
  const [VODList, setVODList] = useState([]);
  const [originalVODList, setOriginalVODList] = useState([]); //검색 필터링에 기준이 되는 상태값


  useEffect(() => {
    const getVODList = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8081/vod/board-list',
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem('ACCESS_TOKEN')}`
            }
          }
        );
  
        if(response.data.items) {
          console.log(response.data.items);
          setVODList(response.data.items);
          setOriginalVODList(response.data.items); 
        }
      } catch (e) {
        console.log(e);
      }
    };
    getVODList();
  }, []);
  

  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setSearchOption(event.target.value);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    console.log("Search Option: ", searchOption);
    console.log("Search Text: ", searchText);
    const filteredVodData = originalVODList.filter((item) => { 
      if (!item.title || !item.writer) {
        return false;
      }

      if (searchOption === "전체") {
        return (
          item.title.includes(searchText) ||
          item.writer.includes(searchText)
        );
      } else if (searchOption === "강사명") {
        return item.writer.includes(searchText);
      } else if (searchOption === "강의명") {
        return item.title.includes(searchText);
      }
      return false;
    });

    setVODList(filteredVodData);  // 필터링된 결과를 VODList에 저장
  };
 
  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <Title subtitle="학생을 위한" title="지난 수업 영상" color="#ffffff" />
      </div>
      <div style={styles.searchContainer}>
        <select
          style={styles.selectBox}
          value={searchOption}
          onChange={handleSelectChange}
        >
          <option style={{ textAlign: "center" }}>전체</option>
          <option style={{ textAlign: "center" }}>강사명</option>
          <option style={{ textAlign: "center" }}>강의명</option>
        </select>
        <input
          type="text"
          style={styles.searchInput}
          value={searchText}
          onChange={handleInputChange}
        />
        <Button sx={styles.searchButton}>
          <SearchIcon sx={styles.searchIcon} onClick={handleSearch} />
        </Button>
        <Button
          onClick={() => navigate("/admin/video/create")}
          sx={styles.writeButton}
        >
          글쓰기
        </Button>
      </div>
      <AdminVodList VODList={VODList} setVODList={setVODList} />
    </div>
  );
};
export default AdminVod;
