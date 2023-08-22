import React, { useState, useCallback, useEffect } from "react";
import styled from "../components/StudentUpdate/StudentUpdateStyled.module.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Title from "../components/Title";

const styles = {
  titleContainer: {
    padding: "20px 0px 20px 50px",
  },
};

/* global daum */
const loadKakaoMapScript = (callback) => {
  const script = document.createElement("script");
  script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  script.onload = () => callback();
  document.head.appendChild(script);
};

const StudentUpdate = () => {
  const { id } = useParams();

  const navi = useNavigate();

  const [studentName, setStudentName] = useState("");
  const [studentTel, setStudentTel] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [busNum, setBusNum] = useState("");
  const [counsel, setCounsel] = useState("");
  const [significant, setSignificant] = useState("");
  const [parentInfo, setParentInfo] = useState({});
  const [parentName, setParentName] = useState("");
  const [parentTel, setParentTel] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [birth, setBirth] = useState(new Date());
  const [school, setSchool] = useState("");
  const [userJoinId, setUserJoinId] = useState("");

  const [courseList, setCourseList] = useState([]);
  const [couNo, setCouNo] = useState("");
  const [claName, setClaName] = useState("");

  const getCourseList = async () => {
    try {
      console.log("과목리스트 가져온다");
      const response = await axios.get(
        "http://192.168.0.220:9090/course/course-list"
      );
      console.log("응답에 리스트 담겨있나?", response.data.items);
      if (response.data.items) {
        setCourseList(response.data.items);
        await getUserInfo(response.data.items);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getUserInfo = async (courseListFromServer) => {
    try {
      const user = {
        id: id,
      };
      const userresponse = await axios.post(
        "http://192.168.0.220:9090/user/getuser",
        user
      );
      const userData = userresponse.data.item;
      console.log("여긴 학생이야~", userresponse);
      console.log("userData 받아옴", userData);

      if (userresponse.data && userresponse.data.item) {
        setStudentName(userData.userName);
        setStudentTel(userData.userTel);
        setStudentEmail(userData.userId);
        setAddress(userData.userAddress);
        setDetailAddress(userData.userAddressDetail);
        setBusNum(userData.userBus);
        setCounsel(userData.userConsultContent);
        setSignificant(userData.userSpecialNote);
        setBirth(userData.userBirth);
        setSchool(userData.userSchool);
        setUserJoinId(userData.userJoinId);
        setCouNo(userData.couNo);

        const selectedCourse = courseListFromServer.find(
          (course) => course.couNo === userData.couNo
        );
        console.log("같은 반 번호 찾음?", selectedCourse);

        if (selectedCourse) {
          setClaName(selectedCourse.claName);
        }
      }

      if (userresponse.data.item.userJoinId) {
        const parent = {
          id: userresponse.data.item.userJoinId,
        };
        const parentresponse = await axios.post(
          "http://192.168.0.220:9090/user/getstudent",
          parent
        );
        console.log("여긴 부모야~", parentresponse);
        if (parentresponse.data && parentresponse.data.item) {
          setParentInfo(parentresponse.data.item);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCourseList();
  }, []);

  const cancelJoin = (e) => {
    e.preventDefault();
    if (window.confirm("수정을 취소합니까?")) {
      navi(-1);
    }
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // mypage에 있는 couno를 여기
      const update = async () => {
        const userDTO = {
          id: id,
          userId: studentEmail,
          userJoinId: userJoinId,
          // userPw: studentTel.slice(-4),
          userName: studentName,
          userTel: studentTel,
          userBus: busNum,
          userBirth: birth,
          userSchool: school,
          userAddress: address,
          userAddressDetail: detailAddress,
          userType: "student",
          userConsultContent: counsel,
          userSpecialNote: significant,
          couNo: couNo,
        };
        console.log("수정 요청할거임", userDTO);
        try {
          await axios.put("http://192.168.0.220:9090/user/update", userDTO);
          alert("학생 정보가 수정되었습니다.");
          navi(-1);
        } catch (e) {
          alert("알 수 없는 에러 발생");
          console.log("완재야 여기가 문제다 지금" + e);
        }
      };
      update();
    },
    [
      id,
      userJoinId,
      studentEmail,
      studentTel,
      studentName,
      birth,
      school,
      address,
      detailAddress,
      counsel,
      significant,
      parentEmail,
      parentTel,
      parentName,
      busNum,
      couNo,
    ]
  );

  // 주소창 클릭 이벤트
  const openAddressSearch = (e) => {
    e.preventDefault();
    loadKakaoMapScript(() => {
      new daum.Postcode({
        oncomplete: function (data) {
          setAddress(data.address); // 주소 넣기
          if (document.querySelector("input[name=userAddressDetail]")) {
            document.querySelector("input[name=userAddressDetail]").focus(); //상세입력 포커싱
          }
        },
      }).open();
    });
  };

  return (
    <>
      <div
        style={{
          height: "auto",
          overflow: "hidden",
          backgroundColor: "#e0e0e0",
          display: "flex",
          position: "relative",
        }}
      >
        <div style={styles.titleContainer}>
          <Title
            subtitle="EduVenture"
            title="학생 조회 및 수정"
            width="400px"
          />
        </div>

        <form className={styled.joinForm} onSubmit={onSubmit}>
          <div className={styled.joinContent1}>
            <label>학생 성명</label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            ></input>

            <label>생년월일</label>
            <input
              type="date"
              id="birth"
              name="birth"
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
            ></input>

            <label>학교</label>
            <input
              type="text"
              id="school"
              name="school"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            ></input>

            <label>학생 연락처</label>
            <input
              type="studentTel"
              id="studentTel"
              name="studentTel"
              value={studentTel}
              onChange={(e) => setStudentTel(e.target.value)}
              placeholder="숫자만 입력하세요"
            ></input>

            <label>학생 Email</label>
            <input
              type="email"
              id="studentEmail"
              name="studentEmail"
              value={studentEmail}
              readOnly={true}
            ></input>

            <label>학부모 성함</label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              value={parentInfo.userName}
              onChange={(e) => setParentName(e.target.value)}
              readOnly={true}
            ></input>

            <label>학부모 연락처</label>
            <input
              type="tel"
              id="parentTel"
              name="parentTel"
              value={parentInfo.userTel}
              onChange={(e) => setParentTel(e.target.value)}
              placeholder="숫자만 입력하세요"
              readOnly={true}
            ></input>

            <label>학부모 Email</label>
            <input
              type="email"
              id="parentEmail"
              name="parentEmail"
              value={parentInfo.userId}
              readOnly={true}
            ></input>

            <label>차량</label>
            <input
              type="number"
              id="busNum"
              name="busNum"
              value={busNum}
              onChange={(e) => setBusNum(e.target.value)}
              placeholder="숫자만 입력하세요"
            ></input>
          </div>

          <div className={styled.joinContent2}>
            <label>상담 내용</label>
            <textarea
              className={styled.counsel}
              id="counsel"
              name="counsel"
              value={counsel}
              onChange={(e) => setCounsel(e.target.value)}
            ></textarea>

            <label>특이 사항</label>
            <textarea
              className={styled.significant}
              id="significant"
              name="significant"
              value={significant}
              onChange={(e) => setSignificant(e.target.value)}
            ></textarea>

            <label>반 이름</label>
            <select
              name="selectclass"
              style={{
                margin: "10px 200px 25px 0px",
                width: "415px",
                height: "40px",
                borderRadius: "10px",
                border: "none",
                fontSize: "large",
                whiteSpace: "pre-line",
                textAlign: "center",
              }}
              value={claName}
              onChange={(e) => {
                const selectedOption = e.target.options[e.target.selectedIndex];
                console.log(selectedOption);
                setClaName(e.target.value);
                setCouNo(selectedOption.id);
              }}
            >
              <option value="" disabled selected>
                반 선택
              </option>
              {courseList.map((course, index) => (
                <option key={index} value={course.claName} id={course.couNo}>
                  {course.claName}
                </option>
              ))}
            </select>

            <label>주소</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onClick={openAddressSearch}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="주소를 검색하세요"
            />

            <label>상세 주소</label>
            <input
              type="text"
              id="detailAddress"
              name="detailAddress"
              value={detailAddress}
              placeholder="상세 주소를 입력하세요"
              onChange={(e) => setDetailAddress(e.target.value)}
            ></input>

            <div className={styled.joinBtns}>
              <button onClick={cancelJoin}>취소하기</button>
              <button type="submit">수정하기</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default StudentUpdate;
