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
    if (location.pathname === "/login" || location.pathname === "/streaming") {
      return null;
    }

    if (
      location.pathname.startsWith("/admin") ||
      userType === "teacher" ||
      userType === "admin"
    ) {
      return <AdminHeader />;
    } else if (isLogin || userType === "student" || userType === "parent") {
      return <UserHeader isLogin={isLogin} />;
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
      <Route path="student" element={<StudentSelect />} />
      <Route path="student/join" element={<Join />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function NotFound() {
  return <div>404 Not Found</div>;
}

export default App;
