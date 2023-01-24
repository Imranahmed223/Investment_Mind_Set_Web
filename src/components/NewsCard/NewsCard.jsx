import React from "react";
import "./NewsCard.scss";
import whitearrow from "../../assest/whitearrow.png";

const NewsCard = ({ img, heading, para }) => {
  return (
    <>
      <div className="newscard">
        <div className="newscard-container">
          <div className="newscard-container-img">
            <img crossorigin="anonymous" src={img} alt="image" />
          </div>
          <div className="newscard-container-content">
            <h1>{heading}</h1>
            <div className="newscard-container-content-flex">
              <p>{para}</p>
            </div>
          </div>
          <div className="newscard-arrow">
            <img src={whitearrow} alt="arrow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
