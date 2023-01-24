import React from "react";

const ProgressBar = ({ completed }) => {
  const progress = {
    backgroundColor: "#0e0e47",
    borderRadius: '1.5rem',
    height: 18,
  };
  const progressB = {
    borderRadius: "1.5rem",
    backgroundColor: "#2e43b6",
    width: "79%",
  };
  return (
    <>
      <div style={progress}>
        <div style={progressB}></div>
      </div>
    </>
  );
};

export default ProgressBar;
