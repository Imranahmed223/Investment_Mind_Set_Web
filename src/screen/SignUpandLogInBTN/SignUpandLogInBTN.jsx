import React from "react";
import "./SignUpandLogInBTN.scss";
import desktwo from "../../assest/desktop1.png";
import google from "../../assest/google.png";
import facebook from "../../assest/facebook.png";
import Button from "../../components/Button/Button";
import { googleInitiate, facebookInitiate } from "./../../store/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const SignUpandLogInBTN = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="signbtn">
        <div className="signbtn-container">
          <div className="signbtn-container-logo">
            <img src={desktwo} alt="" />
          </div>
          <div className="signbtn-container-btns">
            <Link to="/authPage">
              <Button text="sign up" size="large-btn" />
            </Link>
            <br />
            <br />
            <Link to="/authPage">
              <Button text="log in" size="large-btn" />
            </Link>
          </div>
          {/* <p>or continue with</p> */}
          {/* <div className="signbtn-container-icons">
            <img
              src={facebook}
              alt="facebook"
              onClick={() => dispatch(facebookInitiate())}
              style={{ cursor: "pointer" }}
            />
            <img
              src={google}
              alt="google"
              onClick={() => dispatch(googleInitiate())}
              style={{ cursor: "pointer" }}
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SignUpandLogInBTN;
