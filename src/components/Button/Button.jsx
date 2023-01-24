import React from "react";
import "./Button.scss";
const Button = ({ text, props, size }) => {
  return (
    <>
      <button className={`btn-primary ${size}`} {...props}>
        {text}
      </button>
    </>
  );
};

export default Button;
