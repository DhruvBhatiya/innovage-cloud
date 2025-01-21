import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import { Box } from "@mui/material";

// import Home from "./screens/home/Home";
const Home = lazy(() => import("./screens/home/Home"));
const ReactJs = lazy(() => import("./screens/react/ReactJs"));
const UseRef = lazy(() => import("./screens/react/hooks/useRef/UseRef"));

const App = () => {


  var url = window.location.href;
  var filename = url.split("/").pop().split("#")[0].split("?")[0];
  useEffect(() => {
    console.log("path_", filename);
  })


  // if()
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Box className="h-[100vh] w-full flex justify-center items-center" ><Loader /></Box>}>
          {/* <NavBar /> */}
          <Routes>
            {/* <Route path="/reactjs" element={<ReactJs />} />

            <Route path="useRef" element={<UseRef />} /> */}

            <Route index path="/" element={<Home />} />
          </Routes>
          {/* <Footer /> */}
        </Suspense>
      </Router>
      {/* <NavBar />
        <Banner />
      <Skills />
      <Projects />
      <Contact />
        <Footer /> */}
    </div>
  );
}

export default App;
