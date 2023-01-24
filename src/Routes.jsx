import React from "react";
import { BrowserRouter as Router,HashRouter,Route,Navigate,Routes } from "react-router-dom";
import Analysis from "./screen/Analysis/Analysis";
import Crypto from "./screen/Crypto/Crypto";
import Home from "./screen/Home/Home";
import SignUpandLoginPage from "./screen/SignUpandLoginPage/SignUpandLoginPage";
import DeskTop1 from "./screen/DeskTop1/DeskTop1";
import DeskTop2 from "./screen/DeskTop2/DeskTop2";
import Pay  from "./screen/Pay/Pay"
import SignUpandLogInBTN from "./screen/SignUpandLogInBTN/SignUpandLogInBTN";
import Scale from "./screen/Scale/Scale";
import Videos from "./screen/Video/Video";
import AccessDenied from "../src/components/AccessDenied/AccessDenied"
import ProTectedRoute from "./components/ProTectedRoute/ProTectedRoute"
import ProtectLoginRoute from "./components/ProtectLoginRoute/ProtectLoginRoute"
const Routess = () => {
  return (
    <>
      {/* <Router> */}
      <HashRouter>
        <Routes>
          <Route element={<ProtectLoginRoute/>}>
          <Route path="/" element={<DeskTop1 />}></Route>
          <Route path="/desktop" element={<DeskTop2 />}></Route>
          <Route path="/authPage" element={<SignUpandLoginPage />}></Route>
          <Route path="/signup" element={<SignUpandLogInBTN />}></Route>
          </Route>
          <Route element={<ProTectedRoute/>}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/scale" element={<Scale />}></Route>
          <Route path="/crypto" element={<Crypto />}></Route>
          <Route path="/analysis" element={<Analysis />}></Route>
          <Route path="/video" element={<Videos />}></Route>
          <Route path="/pay" element={<Pay />}></Route>
          </Route>
          <Route
            path="/not-found"
            element={<h1 className="text-white">Not found</h1>}
          />
          <Route path="/access-denied" element={<AccessDenied />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
        </HashRouter>
      {/* </Router> */}
    </>
  );
};

export default Routess;
