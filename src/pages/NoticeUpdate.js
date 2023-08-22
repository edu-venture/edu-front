import React, { useCallback, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Title from "../components/Title";

const styles = {
  Container: {
    width: "100vw",
    height: "calc(100vh - 50px)",
    overflow: "hidden",
    backgroundColor: "#5AC467",
    position: "relative",
  },
  titleContainer: {
    padding: "20px 0px 20px 50px",
  },
  title: {
    width: "124px",
    height: "45px",
    backgroundColor: "#7f7f7f",
    color: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    marginLeft: "30px",
    marginTop: "20px",
  },
  input: {
    marginLeft: "30px",
    marginTop: "20px",
    width: "83%",
    height: "45px",
    borderRadius: "20px",
    border: "none",
    fontSize: "15px",
    whiteSpace: "pre-line",
    textAlign: "center",
  },
  button: {
    fontSize: "22px",
    width: "143px",
    height: "58px",
    backgroundColor: "#5AC467",
    borderRadius: "20px",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#5AC467",
    },
    marginRight: "4px",
  },
};

const NoticeUpdate = () => {
  const navi = useNavigate();

  const { noticeNo } = useParams();
  const [id, setId] = useState(sessionStorage.getItem("id"));
  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeContent, setNoticeContent] = useState("");
  const [claName, setClaName] = useState("");
  const [date, setDate] = useState("");

  const [courseList, setCourseList] = useState([]);

  const getCourseList = async () => {
    try {
      console.log("코스리스트갖고오는엑시오스 들어간다");
      // const response = await axios.get('/NoticeTest.json');
      const response = await axios.get(
        "http://192.168.0.220:9090/course/course-list"
      );
      console.log(response);
      console.log("위에껀 리스폰스");
      if (response.data && response.data.items) {
        setCourseList(response.data.items);
      }
      console.log("이건 코스리스트");
      console.log(courseList);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getNoticeInfo = async () => {
      try {
        const noticeDTO = {
          noticeNo: noticeNo,
        };
        const userresponse = await axios.post(
          "http://192.168.0.220:9090/notice/getnotice",
          noticeDTO
        );
        console.log(userresponse);
        if (userresponse.data && userresponse.data.item) {
          const userData = userresponse.data.item;
          setNoticeTitle(userData.noticeTitle);
          setNoticeContent(userData.noticeContent);
          setClaName(userData.claName);
          setDate(userData.date);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getNoticeInfo();
    getCourseList();
    console.log(courseList);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const update = async () => {
        const noticeDTO = {
          id: id,
          noticeNo: noticeNo,
          noticeTitle: noticeTitle,
          noticeContent: noticeContent,
          claName: claName,
          date: date,
        };
        try {
          const response = await axios.put(
            "http://192.268.0.220:9090/notice/noticeupdate",
            noticeDTO
          );
          console.log(response);
          if (response.data && response.data.statusCode === 200) {
            alert("공지사항 수정 완료.");
            navi("/notice");
          }
        } catch (e) {
          console.log(e);
        }
      };
      update();
    },
    [noticeNo, id, noticeTitle, noticeContent, claName, date]
  );

  return (
    <div style={styles.Container}>
      <form onSubmit={onSubmit}>
        <div style={styles.titleContainer}>
          <Title
            subtitle="7월 4주차"
            title="수업 공지사항 수정"
            color="#ffffff"
          />
        </div>

        <div
          style={{
            width: "90%",
            height: "80%",
            margin: "50px auto 0 auto",
            background: "#ececec",
            borderRadius: "20px 20px 0 0",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
          }}
        >
          <div style={styles.title}>반</div>
          {/*<select name="selectclass"   style={styles.input}  value={claName} onChange={e => setClaName(e.target.value)}>*/}
          {/*    <option value="Math2sunday">수2월수금</option>*/}
          {/*    <option value="Math1TuesdayThursday">수1화목</option>*/}

          {/*</select>*/}

          <select
            name="selectclass"
            style={styles.input}
            value={claName}
            onChange={(e) => setClaName(e.target.value)}
          >
            {courseList.map((course, index) => (
              <option key={index} value={course.claName}>
                {course.claName}
              </option>
            ))}
          </select>

          <div style={styles.title}>날짜</div>
          <input
            style={{
              ...styles.input,
              width: "19%",
              marginLeft: "32%",
              marginRight: "32%",
            }}
            type={"date"}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div style={styles.title}>공지사항 제목</div>
          <input
            style={styles.input}
            value={noticeTitle}
            onChange={(e) => setNoticeTitle(e.target.value)}
          />
          <div style={{ ...styles.title, height: "400px" }}>공지 사항</div>
          <textarea
            style={{
              ...styles.input,
              height: "400px",
              textAlign: "left",
              padding: "15px",
            }}
            value={noticeContent}
            onChange={(e) => setNoticeContent(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              width: "100%",
              marginTop: "20px",
              justifyContent: "flex-end",
            }}
          >
            <Button sx={styles.button} onClick={() => navi("/notice")}>
              취소하기
            </Button>
            <Button sx={styles.button} onClick={onSubmit}>
              수정하기
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NoticeUpdate;
