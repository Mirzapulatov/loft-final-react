import React from "react";
import TextField from "@material-ui/core/TextField";
import "./Fields.css";

export const input = ({
  input,
  label,
  value,
  meta: { touched, invalid, error },
  helperText,
  ...props
}) => {
  return (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={(touched && error) || helperText}
      {...input}
      {...props}
    />
  );
};
