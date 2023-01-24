import React from "react";
import { Link } from "react-router-dom";
import "./DeskTop2.scss";

import desktwo from "../../assest/desktop1.png";
const DeskTop2 = () => {
  return (
    <>
      <div className="desktwo">
        <div className="desktwo-container">
          <div className="desktwo-container-logo">
            <img src={desktwo} alt="" />
          </div>
          <div className="desktwo-container-loading">
            <div className="desktwo-container-loading-box">
              <div className="desktwo-container-loading-box-line"></div>
            </div>
          </div>
          <div className="desktwo-container-btn">
            <Link to="/signup">Next</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeskTop2;
