import React from "react";
import "./DeskTop1.scss";
import deskone from "../../assest/desktop2.png";
import { Link } from "react-router-dom";
const DeskTop1 = () => {
  return (
    <>
      <div className="deskone">
        <div className="deskone-container">
          <div className="deskone-container-logo">
            <img src={deskone} alt="" />
          </div>
          <div className="deskone-container-loading">
            <div className="deskone-container-loading-box">
              <div className="deskone-container-loading-box-line"></div>
            </div>
          </div>
          <div className="deskone-container-btn">
            <Link to='/desktop'>Next</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeskTop1;
