import React,{useEffect} from "react";
import "./Pay.scss";
import Heading from "../../components/Heading/Heading";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Navbar from "../../components/Navbar/Navbar";
import { useDispatch,useSelector } from "react-redux";
import { StripeCheckOut, clearAnalysisErrors,clearMessages } from "./../../store/actions";
import toast, { Toaster } from "react-hot-toast";


const Pay = () => {
  const dispatch = useDispatch()
  const { message, analysisErrors } = useSelector(
    (state) => state.analysisReducer
  );
  const validation = Yup.object({
    number: Yup.number().required("Required"),
    exp_month: Yup.number().required("Required"),
    exp_year: Yup.number().required("Required"),
    cvc: Yup.number().required("Required"),
  });

  useEffect(() => {
    if (analysisErrors.length > 0) {
      toast.error(analysisErrors);
      dispatch(clearAnalysisErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessages());
    }
  }, [message, analysisErrors]);
  return (
    <>
    <Toaster
        toastOptions={{
          style: {
            fontSize: "14px",
          },
        }}
      />
      <div className="pay">
        <Navbar />
        <div className="payform">
          <center>
            <Heading text="Pay With Card" />
          </center>
          <Formik
            initialValues={{
              number: "",
              exp_month: "",
              exp_year: "",
              cvc: "",
            }}
            validationSchema={validation}
            onSubmit={(values) => {
              console.log('values is',values)
              dispatch(StripeCheckOut(values))
            }}
          >
            {(formik) => (
              <div className="pay-form">
                <Form className="donate-form">
                  <FormInput label="Enter Number" name="number" type="string" />
                  <FormInput
                    label="Enter Expiry Month"
                    name="exp_month"
                    type="number"
                  />
                  <br />
                  <FormInput
                    label="Enter Expiry Year"
                    name="exp_year"
                    type="number"
                  />
                  <br />

                  <FormInput label="Enter CVC" name="cvc" type="string" />
                  <br />
                  <br />

                  <div className="signpage-container-content-signup-btn">
                    <Button text="pay" size="small-btn" type="submit" />
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Pay;