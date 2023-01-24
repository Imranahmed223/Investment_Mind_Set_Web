import React from "react";
import "./WeeklyAnalysis.scss";

const WeeklyAnalysis = ({ img, heading, subheading, para }) => {
  return (
    <>
      <div className="weeklyanalysis">
        <div className="weeklyanalysis-container">
          <div className="weeklyanalysis-container-top">
            <img crossOrigin="anonymous" src={img} alt="" />
            <div className="weeklyanalysis-container-top-content">
              <h4>{heading}</h4>
              <h6>{subheading}</h6>
            </div>
          </div>
          <div className="weeklyanalysis-container-para">{para}</div>
        </div>
      </div>
    </>
  );
};

export default WeeklyAnalysis;
