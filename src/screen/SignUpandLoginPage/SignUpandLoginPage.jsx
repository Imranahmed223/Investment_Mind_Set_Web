import React, { useState, useEffect } from "react";
import "./SignUpandLoginPage.scss";
import desktwo from "../../assest/desktop1.png";
import FormInput from "../../components/FormInput/FormInput";
import google from "../../assest/google.png";
import facebook from "../../assest/facebook.png";
import Button from "../../components/Button/Button";
import toast, { Toaster } from "react-hot-toast";
import {
  Register,
  clearErrors,
  clearMessages,
  Login,
} from "./../../store/actions";
import { useNavigate } from "react-router-dom";
import { Puff } from "react-loader-spinner";
// YUP and Formik
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

// MUI
//  Material UI
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { signInWithFacebook, signInWithGoogle } from "../../firebase";

// MUI Tabs

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const SignUpandLoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, errors, loading, loginMessage } = useSelector(
    (state) => state.authReducer
  );

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (errors.length > 0) {
      toast.error(errors);
      dispatch(clearErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessages());
    }
    if (loginMessage) {
      toast.success(loginMessage);
      dispatch(clearMessages());
      setTimeout(() => navigate("/home"), 2000);
    }
  }, [message, errors, loginMessage]);

  const signup = Yup.object({
    firstName: Yup.string()
      .min(2, "Name must be 2 character")
      .max(20, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Name must be 2 character")
      .max(20, "Must be 15 characters or less")
      .required("Required"),
    userName: Yup.string()
      .min(2, "Name must be 2 character")
      .max(20, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Required"),
    password: Yup.string().min(8, "Required").required("Required"),
    confirmPassword: Yup.string()
      .required("Please confirm your password")
      .oneOf([Yup.ref("password")], "Passwords do not match"),
  });

  const login = Yup.object({
    email: Yup.string().email("Email is invalid").required("Required"),
    password: Yup.string().min(8, "Required").required("Required"),
  });

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            fontSize: "14px",
          },
        }}
      />
      <div className="signpage">
        <div className="signpage-container">
          <div className="signpage-container-logo">
            <img src={desktwo} alt="" />
          </div>
          <div className="signpage-container-content">
            <Box sx={{ width: "100%" }}>
              <Tabs value={value} onChange={handleChange} centered>
                <Tab
                  id="signpage-container-content-tab"
                  label="Sign up"
                  style={{ fontFamily: "Oswald" }}
                />
                <Tab
                  id="signpage-container-content-tab"
                  label="log in"
                  style={{ fontFamily: "Oswald" }}
                />
              </Tabs>
            </Box>
            <TabPanel
              value={value}
              index={0}
              className="signpage-container-content-signup"
            >
              <div className="form-width">
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    userName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                  }}
                  validationSchema={signup}
                  onSubmit={(values) => {
                    delete values.confirmPassword;
                    dispatch(Register(values));
                  }}
                >
                  {(formik) => (
                    <div>
                      <Form className="donate-form">
                        <div className="signpage-container-content-signup-flex">
                          <FormInput
                            label="First Name"
                            name="firstName"
                            type="text"
                          />
                          <FormInput
                            label="Last Name"
                            name="lastName"
                            type="text"
                          />
                        </div>
                        <FormInput
                          label="User Name"
                          name="userName"
                          type="text"
                        />
                        <FormInput
                          label="email address"
                          name="email"
                          type="email"
                        />
                        <br />
                        <FormInput
                          label="password"
                          name="password"
                          type="password"
                        />
                        <br />

                        <FormInput
                          label="confirm password"
                          name="confirmPassword"
                          type="password"
                        />
                        <br />
                        <br />

                        <div className="signpage-container-content-signup-btn">
                          {
                            <Button
                              text={
                                loading ? (
                                  <Puff
                                    height="25"
                                    width="25"
                                    radius="4"
                                    color="white"
                                    ariaLabel="loading"
                                    wrapperStyle
                                    wrapperClass
                                  />
                                ) : (
                                  "sign up"
                                )
                              }
                              size="small-btn"
                              type="submit"
                            />
                          }
                        </div>
                      </Form>
                    </div>
                  )}
                </Formik>
              </div>
              {/* <div className="signpage-container-content-signup-bottom">
                <p>or continue with</p>
                <div className="signpage-container-content-signup-bottom-icons">
                  <img
                    src={facebook}
                    alt="facebook"
                    onClick={signInWithFacebook}
                  />
                  <img src={google} alt="google" onClick={signInWithGoogle} />
                </div>
              </div> */}
            </TabPanel>

            {/* Log IN  */}
            <TabPanel
              value={value}
              index={1}
              className="signpage-container-content-signup"
            >
              <div className="form-width">
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={login}
                  onSubmit={(values) => {
                    dispatch(Login(values));
                  }}
                >
                  {(formik) => (
                    <div className="signpage-container-content-login-form">
                      <Form>
                        <FormInput
                          label="email address"
                          name="email"
                          type="email"
                        />
                        <br />
                        <FormInput
                          label="password"
                          name="password"
                          type="password"
                        />
                        <br />

                        <div className="signpage-container-content-signup-btn">
                          <Button
                            text={
                              loading ? (
                                <Puff
                                  height="25"
                                  width="25"
                                  radius="4"
                                  color="white"
                                  ariaLabel="loading"
                                  wrapperStyle
                                  wrapperClass
                                />
                              ) : (
                                "log in"
                              )
                            }
                            size="small-btn"
                            type="submit"
                          />
                        </div>
                      </Form>
                    </div>
                  )}
                </Formik>
              </div>
              {/* <div className="signpage-container-content-signup-bottom">
                <p style={{ fontFamily: "Oswald" }}>or continue with</p>
                <div className="signpage-container-content-signup-bottom-icons">
                  <img
                    src={facebook}
                    alt="facebook"
                    onClick={signInWithFacebook}
                  />
                  <img src={google} alt="google" onClick={signInWithGoogle} />
                </div>
              </div> */}
            </TabPanel>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpandLoginPage;
