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
import VODStreaming from "./pages/VODStreaming";
import VODStreamingDetail from "./pages/VODStreamingDetail";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      {location.pathname !== "/streaming" && <Header />}
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
        <Route path="/video" element={<VODStreaming></VODStreaming>}/>
        <Route path="/video/detail" element={<VODStreamingDetail></VODStreamingDetail>}/>
      </Routes>
    </>
  );
}

export default App;
