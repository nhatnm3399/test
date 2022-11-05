import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import HomeScreen from "./pages/HomeScreen";
import DetailScreen from "./pages/DetailScreen";
import DetailCheckOut from "./components/DetailCheckOut";
import Booking from "./pages/Booking";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/detail-hotel/:id" element={<DetailCheckOut />} />
          <Route path="/home-screen-detail/:param" element={<DetailScreen />} />
          {/* <Route path="/home-screen/:id" element={<HomeScreen />} /> */}
          {/* <Route path="/hotels" element={<List />} /> */}
          {/* <Route path="/hotels/:id" element={<Hotel />} /> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
