import React from "react";
import "./SliderVideo.scss";

const SliderVideo = ({ video, flag }) => {
  return (
    <>
      {!flag &&
        <div className="slidervideo">
          <div className="slidervideo-container">
            <div style={{ display: 'flex', borderRadius: '5px', overflow: 'hidden' }}>
              <video width="100%" controls >
                <source src={video} type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>
      }
      {flag &&
        <div className="slidervideo-active">
          <div className="slidervideo-active-container">
          <div style={{ display: 'flex', borderRadius: '5px', overflow: 'hidden' }}>
            <video width="100%" controls >
              <source src={video} type="video/mp4"/>
            </video>
          </div>
          </div>
        </div>
      }
    </>
  );
};

export default SliderVideo;
