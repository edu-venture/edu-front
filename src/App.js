import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Register from "./pages/Register";
import MyPage from "./pages/MyPage";
import Payment from "./pages/Payment";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Location from "./pages/Location";
import Messenger from "./pages/Messenger";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/location" element={<Location />} />
        <Route path="/messenger" element={<Messenger />} />
      </Routes>
    </>
  );
}

export default App;
