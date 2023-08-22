import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import BasicHeader from "./components/Header/BasicHeader";
import UserHeader from "./components/Header/UserHeader";
import AdminHeader from "./components/Header/AdminHeader";
import Main from "./pages/Main";
import AOS from "aos";
import "aos/dist/aos.css";
import Attend from "./pages/Attend";
import Lecture from "./pages/Lecture";
import Streaming from "./pages/Streaming";
import Payment from "./pages/Payment";
import Messenger from "./pages/Messenger";
import Location from "./pages/Location";
import VODBoard from "./pages/VODBoard";
import VODDetail from "./pages/VODDetail";
import MyPage from "./pages/MyPage";
import ChangePassword from "./pages/ChangePassword";
import StudentSelect from "./pages/StudentSelect";
import Join from "./pages/Join";
import Notice from "./pages/Notice";
import AdminVod from "./pages/AdminVod";
import AdminVodCreate from "./pages/AdminVodCreate";
import StudentUpdate from "./pages/StudentUpdate";
import NoticeCreate from "./pages/NoticeCreate";
import NoticeUpdate from "./pages/NoticeUpdate";
import AdminJoin from "./pages/AdminJoin";
import Teacher from "./pages/Teacher";
import StreamingBoard from "./pages/StreamingBoard";
import StreamingCreate from "./pages/StreamingCreate";
import StreamingSetting from "./pages/StreamingSetting";
import ReceiptSelect from "./pages/ReceiptSelect";
import ReceiptRegister from "./pages/ReceiptRegister";

function App() {
  const userType = sessionStorage.getItem("userType");
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const renderHeader = () => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/streaming" ||
      location.pathname === "/admin/join"
    ) {
      return null;
    }

    if (
      location.pathname.startsWith("/admin") ||
      userType === "teacher" ||
      userType === "admin"
    ) {
      return <AdminHeader />;
    } else if (userType === "student" || userType === "parent") {
      return <UserHeader />;
    } else {
      return <BasicHeader />;
    }
  };

  return (
    <>
      {renderHeader()}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/attend" element={<Attend />} />
        <Route path="/lecture" element={<Lecture />} />
        <Route path="/streaming" element={<Streaming />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/location" element={<Location />} />
        <Route path="/messenger/" element={<Messenger />} />
        <Route path="/messenger/:id" element={<Messenger />} />
        <Route path="/video" element={<VODBoard />} />
        <Route path="/video/detail/:id" element={<VODDetail />} />
        <Route path="/user/mypage" element={<MyPage />} />
        <Route path="/user/changePassword" element={<ChangePassword />} />
        <Route path="admin/*" element={<AdminRoutes />} />
      </Routes>
    </>
  );
}

function AdminRoutes() {
  return (
    <Routes>
      <Route path="join" element={<AdminJoin />} />
      <Route path="student" element={<StudentSelect />} />
      <Route path="student/join" element={<Join />} />
      <Route path="student/update" element={<StudentUpdate />} />
      <Route path="student/update/:id" element={<StudentUpdate />} />
      <Route path="streaming" element={<StreamingBoard />} />
      <Route path="streaming/create" element={<StreamingCreate />} />
      <Route path="streaming/create/setting" element={<StreamingSetting />} />
      <Route path="video" element={<AdminVod />} />
      <Route path="video/create" element={<AdminVodCreate />} />
      <Route path="notice" element={<Notice />} />
      <Route path="notice/create" element={<NoticeCreate />} />
      <Route path="notice/update" element={<NoticeUpdate />} />
      <Route path="notice/update/:id" element={<NoticeUpdate />} />
      <Route path="receipt" element={<ReceiptSelect />} />
      <Route path="receipt/register" element={<ReceiptRegister />} />
      <Route path="messenger" element={<Messenger />} />
      <Route path="messenger/:id" element={<Messenger />} />
      <Route path="teacher" element={<Teacher />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function NotFound() {
  return <div>404 Not Found</div>;
}

export default App;
