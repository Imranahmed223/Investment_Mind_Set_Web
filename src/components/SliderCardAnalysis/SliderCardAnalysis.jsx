import React from "react";
import "./SliderCardAnalysis.scss";

const SliderCardAnalysis = ({ img, heading, subheading, para, flag }) => {
  return (
    <>
      {!flag &&
        <div className="slideanalysis">
          <div className="slideanalysis-container">
            <div className="slideanalysis-container-top">
              <img crossorigin="anonymous" src={img} alt="" />
              <div className="slideanalysis-container-top-content">
                <h4>{heading}</h4>
                <h6>{subheading}</h6>
              </div>
            </div>
            <div className="slideanalysis-container-para">{para}</div>
          </div>
        </div>
      }
      {flag &&
        <div className="slideanalysis-active">
          <div className="slideanalysis-active-container">
            <div className="slideanalysis-active-container-top">
              <img crossOrigin="anonymous" src={img} alt="" />
              <div className="slideanalysis-active-container-top-content">
                <h4>{heading}</h4>
                <h6>{subheading}</h6>
              </div>
            </div>
            <div className="slideanalysis-active-container-para">{para}</div>
          </div>
        </div>
      }
    </>
  );
};

export default SliderCardAnalysis;
