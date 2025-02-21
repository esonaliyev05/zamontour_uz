import React, { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader"; // PulseLoader import qilish
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Concat from "./components/Concat/Concat";
import Footer from "./components/Footer/Footer";
import "./App.css";
const App = () => {
  const [loading, setLoading] = useState(true); // Loading holatini boshqarish

  // useEffect yordamida sahifa to'liq yuklanganda loadingni false qilish
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Loadingni false qilish, agar 3 soniyadan keyin sahifa to'liq yuklansa
    }, 2000); // 3 sekund kutish (yoki boshqa vaqt o'zgartirilishi mumkin)
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <h1
            className="animate__animated animate__flip"
            style={{
              color: "white",
              fontSize: "50px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Aventour
          </h1>
          <br />
          {/* <PulseLoader color="#36d7b7" loading={loading} size={15} /> */}
        </div>
      ) : (
        <>
          <Navbar />
          <Header />
          <Main />
          <Concat />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;

// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { RingLoader } from "react-spinners";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";

// function App() {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [contentLoaded, setContentLoaded] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   const handleClose = () => setOpen(false);
//   const handleOpen = () => setOpen(true);

//   useEffect(() => {

//     setTimeout(() => {
//       setLoading(false);
//       setContentLoaded(true);
//     }, 2000);
//   }, []);

//   return (
//     <>
//       <BrowserRouter>
//         {loading ? (
//           <div
//             className="loader-container"
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               height: "100vh",
//             }}
//           >
//             <RingLoader size={100} color="#991b1b" />
//           </div>
//         ) : contentLoaded ? (
//           <>
//             <Navbar handleOpen={handleOpen} toggleSidebar={toggleSidebar} />
//             <Routes>
//               <Route
//                 path="/"
//                 element={
//                   <Home
//                     open={open}
//                     handleClose={handleClose}
//                     handleOpen={handleOpen}
//                     isOpen={isSidebarOpen}
//                     toggleSidebar={toggleSidebar}
//                   />
//                 }
//               />
//               <Route path="/about" element={<About />} />
//             </Routes>
//             <Footer />
//           </>
//         ) : (
//           <div
//             className="loading-overlay"
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               height: "100vh",
//             }}
//           >
//             <RingLoader size={100} color="#36D7B7" />
//           </div>
//         )}
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
