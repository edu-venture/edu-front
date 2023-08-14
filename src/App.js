import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import Header from "./components/Header";
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
import AdminHeader from './components/AdminHeader';
import StudentSelect from "./pages/StudentSelect";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      {(!location.pathname.startsWith('/admin') && location.pathname !== "/streaming") && <Header />}
      {location.pathname.startsWith('/admin') && <AdminHeader />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Main />} />
        <Route path="/attend" element={<Attend />} />
        <Route path="/lecture" element={<Lecture />} />
        <Route path="/streaming" element={<Streaming />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/location" element={<Location />} />
        <Route path="/messenger/" element={<Messenger />} />
        <Route path="/messenger/:id" element={<Messenger />} />
        <Route path="/video" element={<VODBoard />} />
        <Route path="/video/detail/:id" element={<VODDetail />} />
        <Route path="/admin/studentSelect" element={<StudentSelect />} />
      </Routes>
    </>
  );
}

export default App;
