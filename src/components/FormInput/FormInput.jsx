import React from "react";
import "./FormInput.scss";
import { ErrorMessage, useField } from "formik";
const FormInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input
        type="text"
        className={`form-input ${meta.touched && meta.error && "is-invalid"}`}
        {...field}
        {...props}
        autoComplete="off"
        placeholder={label}
      />
      
      <ErrorMessage component="div" name={field.name} className="form-error" />
    </>
  );
};

export default FormInput;
